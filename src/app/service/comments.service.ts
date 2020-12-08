import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: Comments = new Comments(0, 0, '', '');
  commentList: Comments[];
  constructor(private http: HttpClient) { }
  getCommentList() {
    return this.http.get<Comments[]>('http://localhost:8080/api/comment/list');
  }
}
