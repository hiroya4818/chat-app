import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.onAuthStateChanged(user => console.log(user))
   }

  login(email: string, password: string): Promise<firebase.auth.UserCredential | void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
  // authService.create(email, password)
  //   .then((credential) => credential)
  //   .catch((error) => error)
}
