import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newspost',
  templateUrl: './newspost.component.html',
  styleUrls: ['./newspost.component.css']
})
export class NewspostComponent implements OnInit {
  isCreate = true;
  formTitle = 'Create New Post';
  formTitleEdit = 'Edit Post';
  post: Post= new Post(0, '', '', '', 'slide1.jpg', '', '');
  postList: Post[];
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
     
   }

  ngOnInit(): void {
    this.getPostList();
  }
  savePost() {
    this.http.post<Post>('http://localhost:8080/api/post/save', this.post)
    .subscribe(data => {
      if(data !=null){
        this.toastr.success('success', 'Save success!');
      }
      
    });
  }

  updatePost() {
    this.http.put<Post>('http://localhost:8080/api/post/update', this.post)
    .subscribe(data => {
      if(data !=null){
        this.toastr.success('update', 'Update success!');
      }
      
    });
  }

  getPostList() {
    this.http.get<Post[]>('http://localhost:8080/api/post/list')
    .subscribe(data => {
      this.postList = data;      
    });
  }

  edit(id) {
    this.http.get<Post>('http://localhost:8080/api/post/one/'+id)
    .subscribe(data => {
      this.post = data;  
      this.isCreate = false;    
    });
  }

  delete(id) {
    this.http.delete<any>('http://localhost:8080/api/post/delete/'+id)
    .subscribe(data => {
      console.log("Delete successful");
      // this.router.navigate(['/dasboard/post']);
    });
  }

}
