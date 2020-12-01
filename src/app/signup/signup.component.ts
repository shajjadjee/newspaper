import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user;
roleList: any = ['admin', 'user']
isSubmitted;
  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {
    this.user = new User(0, '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }
  onsubmit() {
    if(status == 'success'){
      this.router.navigate(['/dasboard']);
    }
    
}
  submit() {
    this.isSubmitted = true;
    this.http.post<User>('http://localhost:8080/api/user/save', this.user)
    .subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
}

