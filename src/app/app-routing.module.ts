import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatGuard } from './authenticat.guard';
import { CategoryComponent } from './category/category.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewspostComponent } from './newspost/newspost.component';
import { ReadComponent } from './read/read.component';

import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'read/:id', component: ReadComponent
  },
  {
    path: 'cat/:cname', component: CategoryComponent
  },
  {
    path: 'signup', component: SignupComponent ,
    children:[
      {
        path: '**', redirectTo: 'dashboard'
      },
    ],
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
