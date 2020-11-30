
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User(0, '', '', '', '', '', '');
  isSubmit = false;
  constructor(private us: UserService) {}
  ngOnInit(): void {
  }
  login() {
    this.us.login(this.user);
  }
}
