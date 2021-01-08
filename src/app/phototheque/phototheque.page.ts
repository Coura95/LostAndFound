import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-phototheque',
  templateUrl: './phototheque.page.html',
  styleUrls: ['./phototheque.page.scss'],
})
export class PhotothequePage implements OnInit {
  image = "https://www.semencesdefrance.com/wp-content/uploads/2020/01/placeholder.png";
  imagePath: string;
  upload: any;
  constructor(private camera: Camera,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public afSG: AngularFireStorage

  ) { }

  async addPhoto(source: string) {

    if (source === 'library') {
      console.log('library');
      const libraryImage = await this.openLibrary();
      this.image = 'data:image/png;base64,' + libraryImage;
    } else {
      console.log('camera');
      const cameraImage = await this.openCamera();
      this.image = 'data:image/png;base64,' + cameraImage;
    }
  }


  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY

    };
    return await this.camera.getPicture(options);
    /*
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });*/
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA

    };
    return await this.camera.getPicture(options);

  }

  async uploadFirebase() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.imagePath = new Date().getTime() + 'png';
    this. upload =  this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
    this.upload.then(async()=>{
      this.image = "https://www.semencesdefrance.com/wp-content/uploads/2020/01/placeholder.png";

      await loading.dismiss();
     
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Felicitations',
          
          message: 'L\'envoie de la photo dans firebase est terminé!',
          buttons: ['OK']
        });
    
        await alert.present();
      
    
    })
  }


  ngOnInit() {
  }

}
