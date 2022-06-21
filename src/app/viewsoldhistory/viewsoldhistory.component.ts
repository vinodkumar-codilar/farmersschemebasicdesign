import { RouterModule, Router } from '@angular/router';
import { NotificationService } from './../notification.service';
import { Notify } from './../notification/Notification';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewsoldhistory',
  templateUrl: './viewsoldhistory.component.html',
  styleUrls: ['./viewsoldhistory.component.css']
})
export class ViewsoldhistoryComponent implements OnInit {

  id:number;
  notifications : Notify[];
  constructor(private service:NotificationService,private router: Router) { }
  ngOnInit(): void {
    this.id=Number(sessionStorage.getItem('UserId')); 
  this.service.getNotification(this.id).subscribe(data=>{
    this.notifications=data.notification;
   // alert(JSON.stringify(data));
   })
  }

}