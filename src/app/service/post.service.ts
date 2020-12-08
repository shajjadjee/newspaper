import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: Post= new Post(0, '', '', '', '', '', '','');
  postList: Post[];
  constructor(private http: HttpClient) { }
  getPostDetails(id){
    return this.http.get('http://localhost:8080/api/post/one/'+id);
  }
  getCatDetails(cname){
    return this.http.get<Post[]>('http://localhost:8080/api/post/two/'+cname);
  }
  getPostList() {
    return this.http.get<Post[]>('http://localhost:8080/api/post/list');
  }
  getSearchList(keyword): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8080/api/post/search/a?keyword='+keyword);
  }
  getUsercount(){
    return this.http.get('http://localhost:8080/api/post/dashboard');
  }
  getPostcount(){
    return this.http.get('http://localhost:8080/api/post/dashboard');
  }
  getCommentcount(){
    return this.http.get('http://localhost:8080/api/post/dashboard');
  }
}
