import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { login } from './login';
import { LoginService } from '../login.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login :login = new login();
  displaymessage: String;
  showForm:boolean=false;
  constructor(private service:LoginService,private router: Router,private serv:SharedService,) { }

  ngOnInit(): void {
  }
loginuser(){
  this.service.userLogin(this.login).subscribe(data=>{
   // alert(JSON.stringify(data));

    if(data.status=="SUCCESS"){
      this.router.navigate(['/alert']);
      //console.log(data.message);
      sessionStorage.setItem('UserId',String(data.userId));
      sessionStorage.setItem('name',String(data.name));
      this.serv.broadcastLoginChange(String(data.name));
      sessionStorage.setItem('userRole',String(data.role));
      //
      this.displaymessage=data.message;
      //alert(data.role);
      if(data.role=='Bidder'){
     alert("Welcome Bidder");
      this.router.navigate(['/biddermarketplace']);

       }
    else if(data.role=='Admin'){
      alert("Welcome Admin");
      this.router.navigate(['/app-admin']);
      
       }
       else if(data.role=='Farmer'){
        alert("Welcome Farmer");
          this.router.navigate(['/app-farmer-welcome2']); 
         
       }
       else{
         alert("Not a Valid response");
       }
    }
    else{
      this.displaymessage=data.message;
    }
  })

  
}


}
