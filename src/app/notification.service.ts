import { RegistrationStatus } from './farmerregistration/RegistrationStatus';
import { NotisDto } from './notification/notisDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotification(id:number): Observable<NotisDto>{
    let url = 'http://localhost:8587/winbids?userid='+id;
    return this.http.get<NotisDto>(url);

  }
  getNotifiy(): Observable<RegistrationStatus>{
    let url = 'http://localhost:8587/winbid';
    return this.http.get<RegistrationStatus>(url);
  }
}
