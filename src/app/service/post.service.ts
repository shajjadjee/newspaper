import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: Post= new Post(0, '', '', '', 'slide1.jpg', '', '','');
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
}
