import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFauth: AngularFireAuth,
    private router: Router) { }

  login (email:string, pass:string){
    return new Promise((resolve, rejected) => {
      debugger
      this.AFauth.signInWithEmailAndPassword(email,pass).then(user =>{
        resolve(user)
        console.log(user);
      }).catch(err=> rejected(err));
    });
  }

  logout(){
   this.AFauth.signOut().then( () => { 
   this.AFauth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider);
    this.router.navigate(['/login']);
   });
  }

   async loginWithGoogle(){
    const res = await this.AFauth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider);
    const user = res.user;
    console.log(user);
    const token =  await user.getIdToken().then(res => {
      return res;
    })
    return firebase.default.auth.GoogleAuthProvider.credential(token, null);
  }

  recuperarContrasena(email:string){
    return this.AFauth.sendPasswordResetEmail(email);
  }

  registroUsuarios(email:string, pass:string){
   return new Promise((resolve, reject) => {
    this.AFauth.createUserWithEmailAndPassword(email,pass).then( res =>{
      resolve(res);
    }).catch(err => reject(err))
   });
    
  }
}
