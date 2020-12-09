import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comments } from '../model/comment.model';
import { Post } from '../model/post.model';
import { CommentsService } from '../service/comments.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  postID: any;
  postData: any;
  post: Post = new Post(0, '', '', '', 'slide1.jpg', '', '', '');
  postList: Post[];
  comments: Comments = new Comments(0, 0, '', '');
  commentList: Comments[];
  username: string;
  constructor(private cs: CommentsService, private ps: PostService, private http: HttpClient, private router: Router, private actRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.postID = this.actRoute.snapshot.params['id'];
    this.loadPostDetails(this.postID);
    this.getPostList();
    this.username = this.readUsername('auth_username');
  }
  // loadPostDetails(postID){
  //   this.ps.getPostDetails(postID).subscribe(data=>)
  // }

  loadPostDetails(postID) {
    this.ps.getPostDetails(postID).subscribe(post => {
      this.postData = post;
    });
  }
  navigation(link) {
    this.router.navigate([link]);
  }
  saveComment() {
    this.http.post<Comments>('http://localhost:8080/api/comment/save', this.comments)
      .subscribe(data => {
        if (data != null) {
          this.toastr.success('success', 'Save success!');
        }
        this.router.navigate(['/']);
      });
  }
  getCommentList() {
    this.cs.getCommentList().subscribe(data => {
      this.commentList = data;
    })
  }
  getPostList() {
    this.ps.getPostList().subscribe(data => {
      this.postList = data;
    })
  }
  readUsername(key: string): string {
    return localStorage.getItem(key);
  }
  proccessname() {
    return this.username;
  }

}
