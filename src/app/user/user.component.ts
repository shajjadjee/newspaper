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
  isCreate = true;
  user:User = new User(0, '', '', '', '', '', '');
userList: User[];
  constructor(private http: HttpClient) { 
   
  }

  ngOnInit(): void {
    this.getUserList();
  }
  saveUser() {
    this.http.post<User>('http://localhost:8080/api/user/save', this.user)
    .subscribe(data => {
      console.log(data);
      
    });
  }

  updateUser() {
    this.http.put<User>('http://localhost:8080/api/user/update', this.user)
    .subscribe(data => {
      console.log("update successful");
      
    });
  }
  getUserList() {
    this.http.get<User[]>('http://localhost:8080/api/user/list')
    .subscribe(data => {
      this.userList = data;      
    });
  }
  edit(id) {
    this.http.get<User>('http://localhost:8080/api/user/one/'+id)
    .subscribe(data => {
      this.user = data;  
      this.isCreate = false;    
    });
  }

  delete(id) {
    this.http.delete<any>('http://localhost:8080/api/user/delete/'+id)
    .subscribe(data => {
      console.log("Delete successful");
      
    });
  }
}
