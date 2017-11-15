import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { FormPage } from '../form/form';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AboutPage } from '../about/about';
import { LoginstudentPage } from '../loginstudent/loginstudent';
import { LoggedinPage } from '../loggedin/loggedin';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  provider = {
    
    name: '',
    profilePicture:'',
    email:'',
    loggedin: false

  }

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, 
    public alertCtrl: AlertController,  public navParams: NavParams) {


    }
    login(provider) {
      let signInProvider = null;
      switch (provider) {
        case "facebook":
        signInProvider = new firebase.auth.FacebookAuthProvider();
        this.navCtrl.setRoot(LoggedinPage);
        break;
        case "google":
        signInProvider = new firebase.auth.GoogleAuthProvider();
        break;
     
      }
     this.navCtrl.setRoot(LoggedinPage);
  

  }
   loginWithFacebook() {
    
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(  res => {
      this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      console.log(res);
    })
  }
  loginWithGoogle() {
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( res => {
      console.log('From --Google--');
      console.log(res);
    this.provider.loggedin = true;
    this.provider.name = res.user.displayName;
    this.provider.email = res.user.email;
    this.provider.profilePicture = res.user.photoURL;
    console.log(this.provider);
    console.log(res);

    })
  }


  signin() {
    this.navCtrl.push(LoginPage);

      }

      register() {
        this.navCtrl.push(SignupPage);
      }

        logout(){
          this.fire.auth.signOut();
          this.provider.loggedin = false;
      
    }
    signup() {
      this.navCtrl.push(SignupPage);
  }
  signInUser() {
    this.navCtrl.push(LoginPage);

      }
      loginabout() {
        this.navCtrl.push(AboutPage);
}
signinstudent() {
  this.navCtrl.push(LoginstudentPage);
}
formvalid() {
  this.navCtrl.push(FormPage);
}
}