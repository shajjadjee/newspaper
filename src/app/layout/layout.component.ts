import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private auth: UserService, private router: Router) { }
  role: string;
  ngOnInit(): void {
    this.role = this.readLocalStorageValue('appHasRole');
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
  readLocalStorageValue(key: string): string {
    return localStorage.getItem(key);
}


}
