import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private userService: UserService,
    private router: Router) {
    const token = localStorage.getItem('token_auth');
    this.isLoggedIn = !!token;
  }

  getIsLooged() {
    const token = localStorage.getItem('token_auth');
    this.isLoggedIn = !!token
    return this.isLoggedIn
  }

  login(document: any, password: any, documentType: any) {
    this.isLoggedIn = false;
    this.userService.login(document, password, documentType)
    .subscribe((response) => {
      this.isLoggedIn = true;
      localStorage.setItem('token_auth', response?.token)
      this.router.navigate(['/dashboard']);
    }, (error) => {
      console.log(error)
    });
  }
}
