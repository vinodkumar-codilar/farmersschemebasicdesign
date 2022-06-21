import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerFinal } from './farmerregistration/registerfinal';
import { RegistrationStatus } from './farmerregistration/RegistrationStatus';
import { Observable } from 'rxjs';
import { bidderreg } from './farmerregistration/bidderreg';

@Injectable({
  providedIn: 'root'
})
export class FarmerregisterService {

  constructor(private http: HttpClient ) { }

  userRegister(registerdata:registerFinal): Observable<RegistrationStatus>{
    let url = 'http://localhost:8587/register';
    return this.http.post<RegistrationStatus>(url, registerdata);

  }

  bidderRegister(registerdata:bidderreg): Observable<RegistrationStatus>{
    let url = 'http://localhost:8587/register';
    return this.http.post<RegistrationStatus>(url, registerdata);

  }
}
