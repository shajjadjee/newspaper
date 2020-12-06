import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NewspostComponent } from './newspost/newspost.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from 'w-ng5';
import { UserService } from './service/user.service';
import { AlertComponent } from './alert/alert.component';

import { ToastrModule } from 'ngx-toastr';
import { ReadComponent } from './read/read.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { DeshboardComponent } from './layout/deshboard/deshboard.component';
import { FilterPipe } from './alert/filter.pipe';
import { RightsidebarComponent } from './sidebar/rightsidebar/rightsidebar.component';
import { FooterComponent } from './footer/footer.component';
import { Userfilter } from './alert/userfilter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NewspostComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    AlertComponent,
    ReadComponent,
    CategoryComponent,
    HeaderComponent,
    DeshboardComponent,
    FilterPipe,
    RightsidebarComponent,
    FooterComponent,
    Userfilter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PipesModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [DatePipe,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
