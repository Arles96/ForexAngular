import { Component, ViewChild } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login = false;
  user = null;
  button = "Google";
  email : string;
  privado : string;
  publico : string;

  constructor( public afAuth : AngularFireAuth, public database : AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      if (!user){
        this.user = null;
        this.login = false;
        this.email = "";
        return;
      }
      this.user = user;
      this.login = true;
      this.email = user.uid
      /*database.database.ref(`/usuarios/${this.email}`).on('value', snapshot => {
        this.privado = snapshot.val().private
        this.publico = snapshot.val().public
      })*/
      database.object('/usuarios/'+this.email).valueChanges().forEach(doc=> {
        this.privado = doc["private"]
        this.publico = doc["public"]

      })
    });
  }
  

  loginGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOutGoogle(){
    this.afAuth.auth.signOut()
  }

}
