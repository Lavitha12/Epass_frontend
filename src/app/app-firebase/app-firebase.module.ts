import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule 
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule 
  ]
})
export class AppFirebaseModule { }
