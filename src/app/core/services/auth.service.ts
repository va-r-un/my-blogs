import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  
  isAuthenticated = false;

  constructor(private apiService: ApiService, private jwt: JwtService) { }

  login(data: any): Observable<User> {
    return this.apiService.post('/users/login', { 'user': data })
      .pipe(map(
        data => {
          this.authenticate(data.user);
          return data;
        }
      ))
  }

  register(data: any): Observable<User> {
    return this.apiService.post('/users', { 'user': data })
      .pipe(map(
        data => {
          this.authenticate(data.user);
          return data;
        }
      ))
  }

  authenticate(data: User) {
    this.isAuthenticated = true;
    this.currentUserSubject.next(data);
    this.jwt.saveToken(data.token);
  }

  purgeAuth() {
    this.jwt.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticated = false;
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  update(user: any): Observable<User> {
    return this.apiService.put('/user',{user})
      .pipe(map(data => {
        this.currentUserSubject.next(data.user);
        return data.user;
      }))
  }


}
