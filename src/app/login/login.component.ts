
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  isSubmit = false;
  constructor() {
    this.user = new User('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  submit() {
    console.log('file submitted');
    this.isSubmit = true;
  }
}
