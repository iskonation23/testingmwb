import { Component, NgZone, ChangeDetectorRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer} from '@angular/platform-browser'
import { WelcomePage } from '../welcome/welcome';
import { AboutPage } from '../about/about';
import { ContactPage }from '../contact/contact';
/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {
  storageRef = firebase.storage().ref();
  image:any;
  file:any;
  progress:any;
  uploaded:any;
  totalByte:any;
  bytesTransferred: any;
  imageURI:any;
  imageFileName:any;

  email: string;

  provider = {
    
    name: '',
    profilePicture:'',
    email:'',
    loggedin: false

  }


  constructor(
    private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
    public af: AngularFireModule,
    public zone:NgZone,
    public dom:DomSanitizer,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public ref: ChangeDetectorRef ) {

    this.email = fire.auth.currentUser.email;
    this.storageRef.child("images/backgroundregister.png").getDownloadURL().then((url)=>{
      this.zone.run(()=>{

      });
    });
    
  }

login(provider) {
  let signInProvider = null;
  switch (provider) {
    case "facebook":
    signInProvider = new firebase.auth.FacebookAuthProvider();
   
    break;
    case "google":
    signInProvider = new firebase.auth.GoogleAuthProvider();
    break;
 
  }

this.fire.auth.signInWithPopup(signInProvider)
.then(  res => {
  console.log('Logging in with - '+provider);
  this.provider.loggedin = true;
  this.provider.name = res.user.displayName;
  this.provider.email = res.user.email;
  this.provider.profilePicture = res.user.photoURL;
  this.ref.detectChanges();
  console.log(res);
})

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
  selectFile(e){
    this.file =e.target.files[0];
    this.readPhoto(this.file);
  }

  startUpload(e){
    
    this.storageRef.child("images/"+this.file.name).put(this.file).then((snapshot)=>{
      alert("Upload" + this.file.name +" Success!");
     
  
    });

  }

  readPhoto(file){
    let reader = new FileReader();
    reader.onload = (e) =>{
      this.zone.run(()=>{
        let path:any = e.target;
        this.image = path.result;

      });
    }
    reader.readAsDataURL(file);
  }

  uploadProgressbar(){
    let fileSelected = this.file;
    let taskUpload = this.storageRef.child("images/"+fileSelected.name).put(fileSelected);
    taskUpload.then((snapshot)=>{
      alert("Upload file: "+fileSelected.name+" Completed!");
    });
    taskUpload.on("state_changed",(snapshot)=>{
      this.zone.run(()=>{
        
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
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
getImage() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  this.camera.getPicture(options).then((imageData) => {
    this.imageURI = imageData;
  }, (err) => {
    console.log(err);
    this.presentToast(err);
  });
}

uploadFile() {
  let loader = this.loadingCtrl.create({
    content: "Uploading..."
  });
  loader.present();
  const fileTransfer: FileTransferObject = this.transfer.create();

  let options: FileUploadOptions = {
    fileKey: 'ionicfile',
    fileName: 'ionicfile',
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
  }

  fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
    .then((data) => {
    console.log(data+" Uploaded Successfully");
    this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
    loader.dismiss();
    this.presentToast("Image uploaded successfully");
  }, (err) => {
    console.log(err);
    loader.dismiss();
    this.presentToast(err);
  });
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 6000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}


