import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  postID: any; 
  postData: any; 
  post: Post= new Post(0, '', '', '','slide1.jpg','','','');
  postList: Post[];
  constructor(private ps: PostService, private http: HttpClient, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.postID= this.actRoute.snapshot.params['id'];
    this.loadPostDetails(this.postID);
    this.getPostList();
  }
  // loadPostDetails(postID){
  //   this.ps.getPostDetails(postID).subscribe(data=>)
  // }
  
  loadPostDetails(postID){
    this.ps.getPostDetails(postID).subscribe(post => {
      this.postData = post;
    });
  }
  navigation(link){
    this.router.navigate([link]);
  }
  getPostList(){
    this.ps.getPostList().subscribe(data => {
     this.postList = data;      
   })
  }

}
