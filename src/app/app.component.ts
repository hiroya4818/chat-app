import { Component } from '@angular/core';

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
}
