import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Organization } from './user';

@Injectable()
export class AuthService {
  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private registered : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isRegistered() {
    return this.registered.asObservable();
  }

  constructor(
    private router: Router
  ) {

    }

  login(org: Organization) {
    if (org.email !== '' && org.password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
    
  }
  
  register(org:Organization){
    if (org.userName !== '' && org.password !== '' && org.fullName !== '' && org.email !== '' ){
      this.registered.next(true);
      this.router.navigate(['/profile']);
    }
  }

  
}
