import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatGuard } from './authenticat.guard';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewspostComponent } from './newspost/newspost.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DasboardComponent,
    canActivate: [AuthenticatGuard],
    children: [
      
      // {
      //   path: '',
      //   component: DasboardComponent
      // },
      {
        path: '**', redirectTo: 'dashboard'
      },

      {
        path: 'post',
        component: NewspostComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
     
    ],

  },
  {
    path: '**', redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
