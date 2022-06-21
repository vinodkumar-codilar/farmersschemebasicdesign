import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogin:boolean;
  name:String;
  constructor(private router: Router,private serv:SharedService) { 

  }
  ngOnInit(): void {
    this.serv.name.subscribe((val) => {
      this.name=val;
    });
  }
Logout() {
   
    sessionStorage.removeItem('UserId');
    this.router.navigate(['/app-login']);
    window.location.reload();
  }

}
