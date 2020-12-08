import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/model/post.model';
import { ImageService } from 'src/app/service/image.service';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';
class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  isCreate = true;
  formTitle = 'Create New Post';
  formTitleEdit = 'Edit Post';
  post: Post = new Post(0, '', '', '', '', '', '', '');
  postList: Post[];
  role: string;
  username: string;
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
        this.router.navigate(['/dashboard/post']);
      });
  }

  updatePost() {
    this.http.put<Post>('http://localhost:8080/api/post/update', this.post)
      .subscribe(data => {
        if (data != null) {
          this.toastr.success('update', 'Update success!');
        }
        this.router.navigate(['/dasboard/post']);
      });
  }

  getPostList() {
    this.ps.getPostList().subscribe(data => {
      this.postList = data;
    })
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
}
