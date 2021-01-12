import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
//import { VideoPlayer } from '@ionic-native/video-player/ngx';
@Component({
  selector: 'app-phototheque',
  templateUrl: './phototheque.page.html',
  styleUrls: ['./phototheque.page.scss'],
})
export class PhotothequePage implements OnInit {
  image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAC0CAMAAACdQlHaAAAAKlBMVEXv8PfR1d7Z3OTn6fDh5Ozl5+/d4Ojr7fTV2eHa3ebe4enm6O/i5ezq7PMkcMHPAAAFQElEQVR4nO2d26KjIAxFvaCIPf7/705V7oJaBiFps596BgXWBCEExKYhkUgkEolEIpFIJBKJRCKRfkucdW0JTWKojbrprwitZAaAXMa6WvOP8VYnZqV527avycvL87ZTTeAKBq5rYv0ET93jmlRZNZ9iVYkio8UsCxMlCotI2bdIYarD6IqUFlZR4IaAy4uAS5RGwAUVA+YDY38v/kxp8ICZGp67vOMzUOBeu0RrypK/NGDAvnv9yl4aLODjdCJfs4YI3B942zZbq4YIPAWAs1UQIPAQ4M03gQUIHI5wjXlLAwQci/jkLQ0QcKjLWnXL5WKXV8EDDj/C9x7ise2uiL8KWKzZXBDjAb4eicWezzkxPOAlAnyZj1AZnRLDA24CsO2N6bIwl54RAwSeD7Cr2EUuwrr2jBggcLhNX/RFwrn4hBggcNDEFwYW3uVxYojAgdnDxUKBz3tCDBKY+8QX7kTI+44RgwRuuGuyj+17QgwTuGn+jJGv9mSEeWPEUIGb5jWuzN185VLGeCPEcIFvKs4bJsYOfMYbJEYOfM4bIsYNfMUbIMYMzO/s7/KXLRAD3+I9EOMFvsnrE+MADgwvt3k9YhTA8zG+8wGvS4wB+D1dnDx/6yNehxgB8DY9dok/5LWJ4QPLcIBN/DGvNR6DB9bhD0OcwGuivNCBrXCPIj6EB74J2Alv7cRpvEiAvXDeSpzIiwP4EL6c+lReFMBjoN6pvBiAQ7zpgg+clxc+cGZe8MC5eaEDZ+cFDpyfFzbwA7yggZ/ghQz8CC9g4NcjvICBY9uWCJiACZiAGwKuIQImYAImYMzAZUoj4IIi4BKlEXBB/SpwrpcLz7UAAFbrY2PuAx0C0psHcr2smqJngnYXunor6Ek9FLU7V4HWFFfymm+6ah6nFX9j+EFVNXCFU/EynguCgrg677tVFzzLU+Q86SZdCxPPH3rYdeP1KQEkEolEIpFIJBIJiQYBZkZTRHL18HcmNXJmXP1rG8Wkpum161FMMoZZM1JeVjK+VfXjImW1vp4F4RNB5cT7HxqUSN+v1uq05CLM2sKHcR2gxTHK2o/b+Z3CXw/szQ17x19zwfBMNjBXv60z493urI+cu7UI6wbY/b4NrKrqLMXYlnJfuDUpzg0DOmDvjCHD5a+lq5Tgbj5EwL7Uc3xcg9tTwkdUYwMWxs7S7VRczJwauKdow4+MmbtwAa+Nlesndjek/HP3UoRJ0QbeUnQzQAUsK6uImZUozb2YFIUo/bXRzQOcQsBq6qRst80dvc530lcK96YFIbAeYaWJO+u3ShL6v8K/CSGwrqtqrevv8IF4phnwYI7wdArca6zYkOVeE8wEmAjYrqvsqCYrLQr8FU1adlRbLx3cwCfMM4y509IxWwm5jcOWqxHMQQ1LA0JgReW4FMzlMhL2VeZPVMD7EeKKd988r70QY+P9l3YmEbuWa+hi1A+tnAWOJm2TmORrBJOVYJ50ZMCW1Pb9wNlanokd4QXWTfj4RQgJFdxkjwnY+UyHFbRe/D2psrE7h+orewMF5k711B+mkc7uMOS1Xnb8dwZ8HHYdQ11X/u6S1ljscdQdZjlPEsxG4lusY7vByRGcWBj4P7TABpZPn1wezgHMnByhSRlYOpOpwFbLVwYGufCw6PFEdsWJwLwdVV+uey+Am0as0VO1v0Tgbb4g5tX58nOEJGvdRBEmAge+2ARxydkeO6USgY/vyIB8godj7dKAj0stMHdQSJ/D3oWXCOz7XwA7rFV8c5ecyiU26e01qK3DemcI07okEolEIpFIpJj+AReoMnva7bi5AAAAAElFTkSuQmCC";
  imagePath: string;
  upload: any;
  constructor(private camera: Camera,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public afSG: AngularFireStorage,
   // private videoPlayer: VideoPlayer

  ) { }

  async addPhoto(source: string) {

    if (source === 'library') {
      console.log('library');
      const libraryImage = await this.openLibrary();
      this.image = 'data:image/jpeg;base64,' + libraryImage;
    } else {
      console.log('camera');
      const cameraImage = await this.openCamera();
      this.image = 'data:image/jpeg;base64,' + cameraImage;
    }/* else {
      console.log('video');
      const cameraImage = await this.openVideo();
      this.image = 'data:image/jpeg;base64,' + cameraImage;
    }*/
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

 // async openVideo() {

    /* const options: CameraOptions = {
       quality: 100,
       destinationType: this.camera.DestinationType.FILE_URI,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.VIDEO,
       targetWidth: 1000,
       targetHeight: 1000,
       sourceType: this.camera.PictureSourceType.CAMERA
     };
     return await this.camera.getPicture(options);*/

   /* this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });

  }*/

  async uploadFirebase() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.imagePath = new Date().getTime() + 'jpeg';
    this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
    this.upload.then(async () => {
      this.image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAC0CAMAAACdQlHaAAAAKlBMVEXv8PfR1d7Z3OTn6fDh5Ozl5+/d4Ojr7fTV2eHa3ebe4enm6O/i5ezq7PMkcMHPAAAFQElEQVR4nO2d26KjIAxFvaCIPf7/705V7oJaBiFps596BgXWBCEExKYhkUgkEolEIpFIJBKJRCKRfkucdW0JTWKojbrprwitZAaAXMa6WvOP8VYnZqV527avycvL87ZTTeAKBq5rYv0ET93jmlRZNZ9iVYkio8UsCxMlCotI2bdIYarD6IqUFlZR4IaAy4uAS5RGwAUVA+YDY38v/kxp8ICZGp67vOMzUOBeu0RrypK/NGDAvnv9yl4aLODjdCJfs4YI3B942zZbq4YIPAWAs1UQIPAQ4M03gQUIHI5wjXlLAwQci/jkLQ0QcKjLWnXL5WKXV8EDDj/C9x7ise2uiL8KWKzZXBDjAb4eicWezzkxPOAlAnyZj1AZnRLDA24CsO2N6bIwl54RAwSeD7Cr2EUuwrr2jBggcLhNX/RFwrn4hBggcNDEFwYW3uVxYojAgdnDxUKBz3tCDBKY+8QX7kTI+44RgwRuuGuyj+17QgwTuGn+jJGv9mSEeWPEUIGb5jWuzN185VLGeCPEcIFvKs4bJsYOfMYbJEYOfM4bIsYNfMUbIMYMzO/s7/KXLRAD3+I9EOMFvsnrE+MADgwvt3k9YhTA8zG+8wGvS4wB+D1dnDx/6yNehxgB8DY9dok/5LWJ4QPLcIBN/DGvNR6DB9bhD0OcwGuivNCBrXCPIj6EB74J2Alv7cRpvEiAvXDeSpzIiwP4EL6c+lReFMBjoN6pvBiAQ7zpgg+clxc+cGZe8MC5eaEDZ+cFDpyfFzbwA7yggZ/ghQz8CC9g4NcjvICBY9uWCJiACZiAGwKuIQImYAImYMzAZUoj4IIi4BKlEXBB/SpwrpcLz7UAAFbrY2PuAx0C0psHcr2smqJngnYXunor6Ek9FLU7V4HWFFfymm+6ah6nFX9j+EFVNXCFU/EynguCgrg677tVFzzLU+Q86SZdCxPPH3rYdeP1KQEkEolEIpFIJBIJiQYBZkZTRHL18HcmNXJmXP1rG8Wkpum161FMMoZZM1JeVjK+VfXjImW1vp4F4RNB5cT7HxqUSN+v1uq05CLM2sKHcR2gxTHK2o/b+Z3CXw/szQ17x19zwfBMNjBXv60z493urI+cu7UI6wbY/b4NrKrqLMXYlnJfuDUpzg0DOmDvjCHD5a+lq5Tgbj5EwL7Uc3xcg9tTwkdUYwMWxs7S7VRczJwauKdow4+MmbtwAa+Nlesndjek/HP3UoRJ0QbeUnQzQAUsK6uImZUozb2YFIUo/bXRzQOcQsBq6qRst80dvc530lcK96YFIbAeYaWJO+u3ShL6v8K/CSGwrqtqrevv8IF4phnwYI7wdArca6zYkOVeE8wEmAjYrqvsqCYrLQr8FU1adlRbLx3cwCfMM4y509IxWwm5jcOWqxHMQQ1LA0JgReW4FMzlMhL2VeZPVMD7EeKKd988r70QY+P9l3YmEbuWa+hi1A+tnAWOJm2TmORrBJOVYJ50ZMCW1Pb9wNlanokd4QXWTfj4RQgJFdxkjwnY+UyHFbRe/D2psrE7h+orewMF5k711B+mkc7uMOS1Xnb8dwZ8HHYdQ11X/u6S1ljscdQdZjlPEsxG4lusY7vByRGcWBj4P7TABpZPn1wezgHMnByhSRlYOpOpwFbLVwYGufCw6PFEdsWJwLwdVV+uey+Am0as0VO1v0Tgbb4g5tX58nOEJGvdRBEmAge+2ARxydkeO6USgY/vyIB8godj7dKAj0stMHdQSJ/D3oWXCOz7XwA7rFV8c5ecyiU26e01qK3DemcI07okEolEIpFIpJj+AReoMnva7bi5AAAAAElFTkSuQmCC";

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
