import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseMessage } from 'src/models/res-message';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  username = ""

  authenticateUser(user: User): Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>('https://cambodia-weather.herokuapp.com/user', user)
  }

  createUser(user: User): Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>('https://cambodia-weather.herokuapp.com/user/new', user)
  }

  initUsername(username: string){
    this.username = username
  }
  getUsername(){
    return this.username
  }
}
