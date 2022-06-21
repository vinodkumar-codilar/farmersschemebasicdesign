import { Subscription, interval, timer } from 'rxjs';

import { BidderService } from './../bidder.service';
import { Router } from '@angular/router';
import{LiveBid} from './bidder';
import { Component, OnInit } from '@angular/core';
import { availablecrop } from './availablecrop';

@Component({
  selector: 'biddermarketplace',
  templateUrl: './biddermarketplace.component.html',
  styleUrls: ['./biddermarketplace.component.css']
})
export class BiddermarketplaceComponent implements OnInit {

  live:LiveBid =new LiveBid();
  id:number;
  name:string;
  currbid:number;
  liveprice:number;
  crop: availablecrop[];
  show:boolean=false;
  basePrice:number;
  user:any;
  cropids:number[]=[];
  currentbids:number[]=[];
  private updateSubscription: Subscription;
 constructor(private service:BidderService,private router: Router) {}
  ngOnInit(): void {

    this.service.fetchActiveBids().subscribe(data=>{
      this.crop = data.crops;
      
    });

  } 

  setidBid(id:number,name:string,basePrice:number){

    this.id=id;
    this.name=name;
    this.basePrice=basePrice;

    //alert(this.id);
    this.show=!this.show; //to shoq the bid input only when the user clicks on bid
    //hit to servier to get the latest current bid
    
   this.service.getCurrrentBid(this.id).subscribe(data=>{
   // alert(JSON.stringify(data));
    this.currbid=data.amount;
   });

   this.updateSubscription = interval(3000).subscribe(
    (val) => {  this.service.getCurrrentBid(this.id).subscribe(data=>{
     // alert(JSON.stringify(data));
      this.currbid=data.amount;
     });
    })
}

  makeBid(){
    alert(this.currbid);
    alert(this.liveprice);
    if(this.liveprice>(this.currbid+100)&& this.liveprice>this.basePrice){
      //alert("bid succeess");
      this.live.cropid=this.id;
      this.live.amount=this.liveprice;
      this.live.userid=Number(sessionStorage.getItem('UserId')); 
      this.service.submitbid(this.live).subscribe(data=>{
       // alert(JSON.stringify(data));
        if(data.status =="SUCCESS"){
          alert("Congrats Bid successfull");
          //Route to the market place
        }
        else{
          alert("Error!! Please try again");
        }
      })
    }
    else{
      alert("Enter a proper bid value")
    }
  }
}
