import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, '武井 健司');
const ANOTHER_USER: User = new User(2, '五十嵐 洋平');


const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'お疲れさまでした'),
  new Comment(ANOTHER_USER, 'この間の件ですが，どうなりましたか'),

  new Comment(CURRENT_USER, 'お疲れさまでした'),
  new Comment(CURRENT_USER, 'クライアントからOKが出ました')
]
@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
  comment = '';
  item$: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.item$ = db.object('/item').valueChanges();
  }

  addComment(comment: string): void {
    if(comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
  }
}
