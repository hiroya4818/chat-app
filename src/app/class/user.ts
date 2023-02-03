import firebase from 'firebase/compat/app';

export class User {
  displayName?: string ;
  email: string | null;
  photoURL?: string | null;
  uid: string;
  initial?: string;


  constructor(user: User | firebase.User) {
    this.uid = user.uid;
    this.email = user.email;
    this.photoURL = user.photoURL;
    if(user.displayName){
      this.displayName = user.displayName;
      this.initial = user.displayName.slice(0,1);
    }

  }

}
