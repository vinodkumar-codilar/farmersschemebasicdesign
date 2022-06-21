import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cropdto } from './crop/cropdto';
import { RegistrationStatus } from './farmerregistration/RegistrationStatus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CropaddService {

  constructor(private http: HttpClient) { }

  addCrop(adddata:cropdto): Observable<RegistrationStatus>{
    let url = 'http://localhost:8587/cropregister';
    return this.http.post<RegistrationStatus>(url, adddata);

  }
}
