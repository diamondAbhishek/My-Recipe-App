import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  backgrounds = [
    'assets/imgs/background/background-1.jpg',
    'assets/imgs/background/background-2.jpg',
    'assets/imgs/background/background-3.jpg',
    'assets/imgs/background/background-4.jpg',
    'assets/imgs/background/background-5.jpg'
  ];

  signupPage = SignupPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor( 
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController ) {}
  
  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Signin failed!',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    });
  }
}
 