import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  postC: any;
  postcData: any;
  // post: Post = new Post(0, '', '', '', 'slide1.jpg', '', '');
  postList: Post[];
  constructor(private ps: PostService, private http: HttpClient, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.postC= this.actRoute.snapshot.params['cname'];
    this.getPostList(this.postC);
    // this.getPostList(cname:any);
  }
  getPostList(postC) {
    this.ps.getCatDetails(postC).subscribe(post => {
      this.postcData = post;
    });
}
navigation(link){
  this.router.navigate([link]);
}
}
