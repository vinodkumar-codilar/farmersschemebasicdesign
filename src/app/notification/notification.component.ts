import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notify } from './Notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  id:number;
  role:string;
  notifications : Notify[];
  constructor(private service:NotificationService,private router: Router) { }
  ngOnInit(): void {
    this.id=Number(sessionStorage.getItem('UserId')); 
  this.service.getNotification(this.id).subscribe(data=>{
    this.notifications=data.notification;
   // alert(JSON.stringify(this.notifications));
    this.role=sessionStorage.getItem("userRole")
   })
  }
}

