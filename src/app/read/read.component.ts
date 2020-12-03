import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  postID: any; 
  postData: any; 
  constructor(private ps: PostService,private router: Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.postID= this.actRoute.snapshot.params['id'];
    this.loadPostDetails(this.postID);
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

}
