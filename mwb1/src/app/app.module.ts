import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ValidatorsModule } from '../validators/validators.module';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoggedinPage} from '../pages/loggedin/loggedin';
import { LoginstudentPage} from '../pages/loginstudent/loginstudent';
import { StudentareaPage } from '../pages/studentarea/studentarea';
import { OptionsignupPage } from '../pages/optionsignup/optionsignup';
import { FormPage } from '../pages/form/form';
import { UserPage } from '../pages/user/user';
import { IonicsplashscreenPage } from '../pages/ionicsplashscreen/ionicsplashscreen'



import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignaturePadModule } from 'angular2-signaturepad';


import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';




const firebaseAuth = {
  apiKey: "AIzaSyDEjSLAR6xJoPA3p2Vr2mwV50wKYaU10y0",
  authDomain: "test-project-7c1fe.firebaseapp.com",
  databaseURL: "https://test-project-7c1fe.firebaseio.com",
  projectId: "test-project-7c1fe",
  storageBucket: "test-project-7c1fe.appspot.com",
  messagingSenderId: "334285489057"
};


var config = {
      apiKey: "AIzaSyAfouwyPSNswez4e47Wo_z_pFZ31SCssdA",
      authDomain: "instructor-login-e9cd6.firebaseapp.com",
      databaseURL: "https://instructor-login-e9cd6.firebaseio.com",
      projectId: "instructor-login-e9cd6",
      storageBucket: "instructor-login-e9cd6.appspot.com",
      messagingSenderId: "989577966063"
    };


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoggedinPage,
    LoginstudentPage,
    StudentareaPage,
    OptionsignupPage,
    FormPage,
    UserPage,
    IonicsplashscreenPage,
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ValidatorsModule,
    
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoggedinPage,
    LoginstudentPage,
    StudentareaPage,
    OptionsignupPage,
    FormPage,
    UserPage,
    IonicsplashscreenPage,
   
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    File,
    Camera
  ]
})
export class AppModule {}
