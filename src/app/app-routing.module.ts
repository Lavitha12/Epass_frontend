import { LoginComponent } from './login/login.component';
import { OrgoperationComponent } from './orgoperation/orgoperation.component';
import { IndoperationComponent } from './indoperation/indoperation.component';
import { HomeComponent } from './home/home.component';
//import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IndividualUserComponent } from './individual-user/individual-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationComponent } from './organisation/organisation.component';

const routes: Routes = [
  // { path: '**', component:LoginComponent },
   { path: 'home', component:HomeComponent },
  // { path: 'individual', component:IndividualUserComponent },
  // { path: 'organisation', component:OrganisationComponent },
  // { path: 'indoperation', component:IndoperationComponent },
  // { path: 'orgoperation', component:OrgoperationComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
