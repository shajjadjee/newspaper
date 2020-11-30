import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user;
isSubmit = false;
roleList: any = ['admin', 'user']
  constructor(private http: HttpClient, private router: Router) {
    this.user = new User(0, '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }
  onsubmit() {
    this.router.navigate(['/dasboard']);
}
  submit() {
    this.http.post<User>('http://localhost:8080/api/user/save', this.user)
    .subscribe(data => {
      console.log(data);
      
    });
  }
}

