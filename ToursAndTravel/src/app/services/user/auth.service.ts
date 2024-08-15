import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, LogInResponse, SignUpResponse, LoginUser } from '../../models/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly Base_URL = "http://localhost:4000/auth/"
  private isLoggedin = false;
  retrievedToken = localStorage.getItem('token') as string

  constructor(private http: HttpClient) {

  }

  signUpUser(newUser: User): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(this.Base_URL + "register", newUser);
  }

  LoginUser(userCredentials: LoginUser): Observable<LogInResponse> {
    return this.http.post<LogInResponse>(this.Base_URL + "login", userCredentials);
  }

  showStatus() {
    const token = localStorage.getItem('token') as string

    if (token) {
      this.isLoggedin = true
      return true
    }
    this.isLoggedin = false
    return false
  }

  logout(): boolean {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.isLoggedin = false;
    return true;
  }


  getSpecificUser(id: string): Observable<User> {
    return this.http.get<User>(this.Base_URL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }



}
