import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/class/user';

@Component({
  selector: 'ca-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user$!: Observable<User | null>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot);
    this.user$ = this.db.object<User>(`/users/${id}`).valueChanges();
  }

}
