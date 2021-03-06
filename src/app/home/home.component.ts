import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  post: Post= new Post(0, '', '', '','','','','');
  postList: Post[];
  constructor(private ps: PostService,private http: HttpClient, private router: Router) { }
  

  ngOnInit(): void {
    this.getPostList();
  }
  getPostList(){
    this.ps.getPostList().subscribe(data => {
     this.postList = data;      
   })
  }
  getNavigation(link, id){
    if(id === ''){
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
}
  getNavigation1(link, cname){
    if(cname === ''){
        this.router.navigate([link]).then(() => {
          window.location.reload();
        });
    } else {
        this.router.navigate([link + '/' + cname]);
    }
}

}
