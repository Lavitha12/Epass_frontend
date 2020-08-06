import { WindowService } from './../common/window/window.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  phoneNumber:string;
  phoneSignIn = true;
  otp:string;
  windowRef:any;
  disableOTPSendButton = true;

  constructor(public afAuth: AngularFireAuth, private windowService: WindowService,private router: Router) {
    this.windowRef = this.windowService.windowRef;
  }

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
  }

  ngAfterViewInit()
  {
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container',{
      size: 'normal',
      callback: (response) => {
        this.disableOTPSendButton = false;
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }
  sendOTP()
  {
    this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber,this.windowRef.recaptchaVerifier).then((confirmationResult) => {
      this.windowRef.confirmationResult = confirmationResult;
    });
  }
  verifyOTP()
  {
    this.windowRef.confirmationResult.confirm(this.otp).then((userCredentials) => console.log(userCredentials));
  }
  togglePhoneSignIn()
  {
    this.phoneSignIn = !this.phoneSignIn;
  }
  logout()
  {
    this.afAuth.auth.signOut();
  }

}
