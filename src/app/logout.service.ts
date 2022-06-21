import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface logoutStatus{
  success:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient) { }

  logout(){
    //return this.http.get<logoutStatus>()
  }
}
