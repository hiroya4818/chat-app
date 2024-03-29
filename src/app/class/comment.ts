import { User } from './user';

export class Comment {

  user: User;
  message: string;
  date: number;
  key!: string;
  isEdit?: boolean;

  constructor(value: any) {
    this.user = value.user;
    this.message = value.message;
    this.date = Date.now();
    if (value.key) {
      this.key = value.key;
    }
  }
}
