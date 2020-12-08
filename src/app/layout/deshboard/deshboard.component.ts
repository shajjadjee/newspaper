import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/model/post.model';
import { User } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent implements OnInit {
  post: Post = new Post(0, '', '', '', 'slide1.jpg', '', '', '');
  postList: Post[];
  upostList: Post[];
  tpost: any;
  user: User = new User(0, '', '', '', '', '', '');
  userList: User[];
  role: string;
  username: string;
  keyword: string = '';
  userListuserList: any;
  
  constructor(private ps: PostService, private us: UserService, private http: HttpClient, private router: Router, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getPostcount();
    this.getUsercount();
    this.getCommentcount();
    this.role = this.readRole('appHasRole');
    this.username = this.readUsername('auth_username');
    this.getPostList();
  }
  readRole(key: string): string {
    return localStorage.getItem(key);
  }
  readUsername(key: string): string {
    return localStorage.getItem(key);
  }
  getPostList() {
    this.ps.getPostList().subscribe(data => {
      this.postList = data;
    })
  }
  getPostcount() {
    this.ps.getPostcount()
      .subscribe(totalpost => {
        this.tpost = totalpost as any;
      });
  }
  getUsercount() {
    this.ps.getUsercount()
      .subscribe(totaluser => {
        this.tpost = totaluser as any;
      });
  }
  getCommentcount() {
    this.ps.getCommentcount()
      .subscribe(totalcomment => {
        this.tpost = totalcomment as any;
      });
  }
  getUserList() {
    this.http.get<User[]>('http://localhost:8080/api/user/list')
      .subscribe(data => {
        this.userList = data;
      });
  }

  

}
