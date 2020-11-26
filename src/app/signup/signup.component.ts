import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
user;
isSubmit = false;
  constructor() {
    this.user = new User('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }
  submit(): void {
    console.log('file submitted');
    this.isSubmit = true;
  }
}

