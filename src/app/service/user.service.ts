import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Viewmodel } from '../model/viewmodel.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUser;
  constructor(private http: HttpClient, private router: Router) { }

  login(user) {
    this.http.post<Viewmodel>('http://localhost:8080/api/user/login', user)
      .subscribe((data) => {
        if (data.status == 'success') {

          localStorage.setItem("auth_username", data.data.username);
          localStorage.setItem("appHasRole", data.data.role);
          localStorage.setItem("isAppLoggedIn", 'true');
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      });
  }

  isLoggedIn(): Boolean {
    const isLogin = Boolean(localStorage.getItem("isAppLoggedIn"));
    return isLogin;
  }

  logout(): void {
    localStorage.removeItem('auth_username');
    localStorage.removeItem('isAppLoggedIn');
    localStorage.removeItem('appHasRole');

  }
  readLocalStorageValue(appHasRole: string): string {
    return localStorage.getItem(appHasRole);
}
}


