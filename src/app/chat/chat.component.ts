import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/compat/auth';


import { Comment } from '../class/comment';
import { User } from '../class/user';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'ca-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {



  comments$!: Observable<Comment[]>;
  commentsRef: AngularFireList<Comment>
  currentUser!: User;
  currentUser$!: Observable<User | null>;
  comment = '';

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
    ) {
    this.commentsRef = db.list('/comments');
    this.currentUser$ = this.afAuth.authState.pipe(
      map((user: firebase.User | null) => {
        if(user) {
          this.currentUser = new User(user);
          console.log(this.currentUser.displayName);
          // this.currentUser.initial = this.currentUser.displayName!.slice(0,1);
          console.log(this.currentUser);
          return this.currentUser;
        }
        return null;
      })
    );

    }

    ngOnInit(): void {
      this.comments$ = this.commentsRef.snapshotChanges()
          .pipe(
            map((snapshots: SnapshotAction<Comment>[]) => {
              return snapshots.map(snapshot => {
                const value = snapshot.payload.val();
                return new Comment({ key: snapshot.payload.key, ...value})
              })
          })
        )
    }

  addComment(comment: string): void {
    if(comment) {
      this.commentsRef.push(new Comment({ user: this.currentUser, message: comment }));
      this.comment = '';
    }
  }

  updateComment(comment: Comment): void {
    const { key, message } = comment;

    this.commentsRef.update(key, { message });
  }

  deleteComment(comment: Comment): void {
    this.commentsRef.remove(comment.key);
  }

}
