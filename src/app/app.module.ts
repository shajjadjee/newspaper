import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NewspostComponent } from './newspost/newspost.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from 'w-ng5';
import { UserService } from './service/user.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NewspostComponent,
    LoginComponent,
    SignupComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PipesModule
    
  ],
  providers: [DatePipe,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
