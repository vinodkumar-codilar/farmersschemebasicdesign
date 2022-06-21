import { LandDetails, Address, User } from './registrationentity';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { FarmerregisterService } from '../farmerregister.service';
import { registerFinal } from './registerfinal';
import { Router } from '@angular/router';
import { bidderreg } from './bidderreg';

@Component({
  selector: 'farmerregistration',
  templateUrl: './farmerregistration.component.html',
  styleUrls: ['./farmerregistration.component.css']
})
export class FarmerregistrationComponent {

  user:User = new User();
  land : LandDetails = new LandDetails();
  address: Address = new Address();

  bidder: bidderreg = new bidderreg();
  confirmPassword:string;
  roles:string[] = ['Farmer','Bidder'];

  regfinal: registerFinal = new registerFinal();

  assignRole(roles:String){
    if(roles==this.roles[0]){
      alert("Farmer is Selected");
      this.user.role='Farmer';
    }
    if(roles==this.roles[1]){
    alert("Bidder is Selected");
    this.user.role='Bidder';
    }
    }

  constructor(private service:FarmerregisterService,private router: Router) { }
  process(){

    if(this.confirmPassword!=this.user.password)
    {
      alert("Password Does Not Match")
    }
    else{
      this.registerUser();
  }
  }
 @ViewChild(NgForm)form1: NgForm;
  reset(){
    this.form1.resetForm();
  }

  registerUser(){
    this.regfinal.address=this.address;
    this.regfinal.user=this.user;
    this.regfinal.landdetails = this.land;

    if(this.user.role=='Farmer'){
      //alert(JSON.stringify(this.regfinal));
      this.service.userRegister(this.regfinal).subscribe(data=>{ 

       // alert(JSON.stringify(data));
        if(data.status=="SUCCESS"){
          //route to bidder welcome
          alert("Registeration Successfull")
          this.router.navigate(['/app-login']);
        
        }else{
          //registration fail
          alert("Registration Fail")
        }
      })
    }
    else{
      
      this.bidder.address=this.address;
      this.bidder.user=this.user;
      
     // alert(JSON.stringify(this.bidder));
      this.service. bidderRegister(this.bidder).subscribe(data=>{

      
        //alert(JSON.stringify(data));
        console.log(data.status);
        if(data.status =="SUCCESS"){
          //route to farmer welcome
         this.router.navigate(['/app-login']);
        }else{
          //registration fail
          alert("Registration Fail")
        }
      })
    }
  }
}

