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
  }
  getPostList() {
    this.ps.getPostList().subscribe(data => {
      this.postList = data;
    })
  }
  getPostcount(): number {
    return this.getPostList.length;
  }
  getUserList() {
    this.http.get<User[]>('http://localhost:8080/api/user/list')
      .subscribe(data => {
        this.userList = data;
      });
  }

  getUsercount() {
    this.http.get<Post>('http://localhost:8080/api/post/dashboard')
      .subscribe(data => {
        this.postList = data;
      });
  }

}
