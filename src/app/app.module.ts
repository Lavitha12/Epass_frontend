import { WindowService } from './common/window/window.service';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndividualUserComponent } from './individual-user/individual-user.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { HttpClient } from '@angular/common/http';
import { IndoperationComponent } from './indoperation/indoperation.component';
import { OrgoperationComponent } from './orgoperation/orgoperation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IndividualUserComponent,
    OrganisationComponent,
    IndoperationComponent,
    OrgoperationComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFirebaseModule,
    FormsModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
