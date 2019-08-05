import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    console.log('Logged in!');
  }

  logout() {
    this.isLoggedIn = false;
    console.log('Logged out!');
  }
}
