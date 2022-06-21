import { interval, Subscription } from 'rxjs';
import { BidderService } from './../bidder.service';
import { availablecrop } from './../biddermarketplace/availablecrop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewmarketplace',
  templateUrl: './viewmarketplace.component.html',
  styleUrls: ['./viewmarketplace.component.css']
})
export class ViewmarketplaceComponent implements OnInit {

  id:number;
  name:string;
  currbid:number;
  crop: availablecrop[];
  private updateSubscription: Subscription;

  constructor(private service:BidderService,private router: Router) { }

  ngOnInit(): void {
    this.service.fetchActiveBids().subscribe(data=>{
         this.crop = data.crops;
  });
}

setidBid(id:number,name:string){

  this.id=id;
  this.name=name;

 this.service.getCurrrentBid(this.id).subscribe(data=>{
  this.currbid=data.amount;
 })

 this.updateSubscription = interval(10000).subscribe(
  (val) => {  this.service.getCurrrentBid(this.id).subscribe(data=>{
    this.currbid=data.amount;
   });
  })
}
}
