import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { PostService } from '../service/post.service';
import { ImageService } from '../service/image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}


@Component({
  selector: 'app-newspost',
  templateUrl: './newspost.component.html',
  styleUrls: ['./newspost.component.css']
})
export class NewspostComponent implements OnInit {
  isCreate = true;
  formTitle = 'Create New Post';
  formTitleEdit = 'Edit Post';
  post: Post = new Post(0, '', '', '', '', '', '', '');
  postList: Post[];
  upostList: Post[];
  user: User = new User(0, '', '', '', '', '', '');
  userList: User[];
  role: string;
  username: string;
  userpList: any;
  keyword: string = '';
  selectedFile: ImageSnippet;
  constructor(private imageService: ImageService, private ps: PostService, private us: UserService, private http: HttpClient, private router: Router, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getPostList();
    this.role = this.readRole('appHasRole');
    this.username = this.readUsername('auth_username');
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          if (res.status == 'success') {
            console.log(res.data);

            this.post.fimage = res.data;
          }
        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }
  readRole(key: string): string {
    return localStorage.getItem(key);
  }
  readUsername(key: string): string {
    return localStorage.getItem(key);
  }
  savePost() {
    this.http.post<Post>('http://localhost:8080/api/post/save', this.post)
      .subscribe(data => {
        if (data != null) {
          this.toastr.success('success', 'Save success!');
        }
        // this.router.navigate(['link']);
      });
  }

  updatePost() {
    this.http.put<Post>('http://localhost:8080/api/post/update', this.post)
      .subscribe(data => {
        if (data != null) {
          this.toastr.success('update', 'Update success!');
        }
        // this.router.navigate(['/dasboard/post']);
      });
  }

  getPostList() {
    this.ps.getPostList().subscribe(data => {
      this.postList = data;
    })
  }
  getUserPost(keyword) {
    this.ps.getSearchList(keyword).subscribe(data => {
      this.upostList = data;
    })
  }
  searchKeyword() {
    this.getUserPost(this.keyword);
  }

  edit(id) {
    this.http.get<Post>('http://localhost:8080/api/post/one/' + id)
      .subscribe(data => {
        this.post = data;
        this.isCreate = false;
      });
  }

  delete(id) {
    this.http.delete<any>('http://localhost:8080/api/post/delete/' + id)
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
  getUserList() {
    this.http.get<User[]>('http://localhost:8080/api/user/list')
      .subscribe(data => {
        this.userList = data;
      });
  }
  getUserpList() {
    this.http.get<Post[]>('http://localhost:8080/api/post/list')
      .subscribe(username => {
        this.userpList = username;
      });
  }

}
