import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comments } from 'src/app/model/comment.model';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comments = new Comments(0, 0, '', '');
  commentList: Comments[];
  isCreate = true;
  constructor(private cs: CommentsService, private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCommentList();
  }
  getCommentList() {
    this.cs.getCommentList().subscribe(data => {
      this.commentList = data;
    })
  }
  edit(id) {
    this.http.get<Comments>('http://localhost:8080/api/comment/one/' + id)
      .subscribe(data => {
        this.comments = data;
        this.isCreate = false;
      });
  }

  delete(id) {
    this.http.delete<any>('http://localhost:8080/api/comment/delete/' + id)
      .subscribe(data => {
        console.log("Delete successful");
        // this.router.navigate(['/dasboard/post']);
      });
  }
  getNavigation(link, id) {
    if (id === '') {
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }
}
