import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Post } from '../model/post.model';
import { Viewmodel } from '../model/viewmodel.model';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate = new Date();
  constructor(private http: HttpClient, private us: UserService, private router: Router, private ps: PostService) { }
  post: Post= new Post(0, '', '', '', 'slide1.jpg', '', '','');
  postList: Post[];
  ngOnInit(): void {
    this.getPostList();
  }
  login(user){
    this.http.post<Viewmodel>('http://localhost:8080/api/user/login', user)
    .subscribe( (data) => {
      if(data.status == 'success'){

        localStorage.setItem("auth_username", data.data.username);
        localStorage.setItem("appHasRole", data.data.role);
        localStorage.setItem("isAppLoggedIn", 'true');
        this.router.navigate(['/dashboard']);        
      } else{
        this.router.navigate(['/login']);
      }
    });
  }
  isLoggedIn (): Boolean{
    const isLogin = Boolean(localStorage.getItem("isAppLoggedIn"));
    return isLogin;
 }
 logout(){
  this.us.logout();
  this.router.navigate(['/']);
}
 getPostList(){
   this.ps.getPostList().subscribe(data => {
    this.postList = data;      
  })
 }

}
