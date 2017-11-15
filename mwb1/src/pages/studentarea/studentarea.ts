import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { WelcomePage } from '../welcome/welcome';
import { AboutPage } from '../about/about';
import { ContactPage }from '../contact/contact';
/**
 * Generated class for the StudentareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentarea',
  templateUrl: 'studentarea.html',
})
export class StudentareaPage {

  email: string;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    
    this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentareaPage');
  }
  logout() {
    this.navCtrl.setRoot(WelcomePage);
  }
  loginabout() {
    this.navCtrl.push(AboutPage);
}
logincontact() {
  this.navCtrl.push(ContactPage);
  }
}
