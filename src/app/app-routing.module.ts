import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewspostComponent } from './newspost/newspost.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DasboardComponent,
    children: [
      {
        path: 'post',
        component: NewspostComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      // {
      //   path: '**',
      //   component: DasboardComponent
      // }
    ],
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
