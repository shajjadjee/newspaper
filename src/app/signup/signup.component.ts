import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user;
isSubmit = false;
  constructor(private http: HttpClient) {
    this.user = new User(0, '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }
  // submit(): void {
  //   console.log('file submitted');
  //   this.isSubmit = true;
  // }
  submit() {
    this.http.post<User>('http://localhost:8080/api/user/save', this.user)
    .subscribe(data => {
      console.log(data);
      
    });
  }
}

