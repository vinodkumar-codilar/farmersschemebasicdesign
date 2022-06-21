import { RegistrationStatus } from './../farmerregistration/RegistrationStatus';
import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 status:RegistrationStatus;
  constructor(private service:NotificationService,private router:Router) { }

  ngOnInit(): void {
  }
  getNotice(){
    this.service.getNotifiy().subscribe(data=>{ 
      alert(data.message);
     })
  }
}
