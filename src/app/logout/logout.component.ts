import { Router } from '@angular/router';
import { LogoutService } from './../logout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user:LogoutService,private router:Router) { }

  ngOnInit(): void {
   /*this.user.logout().subscribe(data => {
      if(){           //data.success
        this.router.navigate([' '])
      }
      else{
        alert('Error in logout');
      }
    })*/
  }

}
