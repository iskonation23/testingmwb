import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { WelcomePage }  from '../welcome/welcome';

@Component({
  selector: 'page-ionicsplashscreen',
  templateUrl: 'ionicsplashscreen.html'
})
export class IonicsplashscreenPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
    

    splash = true;
  
    constructor(public navCtrl: NavController) {
  
    }

    skip() {
      this.navCtrl.setRoot(WelcomePage);
      
    }
  
    slideChanged() {
      if (this.slides.isEnd())
        this.skipMsg = "Get Started!";
    }
  
    ionViewDidLoad() {
      setTimeout(() => this.splash = false, 4000);
    }
    startApp() {
      this.navCtrl.setRoot('WelcomePage', {}, {
        animate: true,
        direction: 'forward'
      });
    }
  
  }

  
