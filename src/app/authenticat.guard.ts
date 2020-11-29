import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatGuard implements CanActivate {
  constructor(private auth: UserService, private router: Router){}

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
     if(this.auth.isLoggedIn()){  
       return true;
     }else{
    this.router.navigate(['login']);
     return false;
    }
    
 }
  
}
