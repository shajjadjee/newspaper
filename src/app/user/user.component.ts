import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User = new User(0, '', '', '', '', '', '', 0);
userList: User[];
  constructor(private http: HttpClient) { 
   
  }

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.http.get<User[]>('http://localhost:8080/api/user/list')
    .subscribe(data => {
      this.userList = data;      
    });
  }
}
