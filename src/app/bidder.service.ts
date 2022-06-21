
import { LiveBid } from './biddermarketplace/bidder';
import { Observable } from 'rxjs';
import { Value, BidStatus } from './biddermarketplace/bidStatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { activecrops } from './biddermarketplace/activecrops';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http: HttpClient ) { }

  fetchActiveBids():Observable<activecrops>{//Active cops object
    let url='http://localhost:8587/crops';
      return this.http.get<activecrops>(url);
  }
  getCurrrentBid(id:number): Observable<Value>{
    let url = 'http://localhost:8587/bid?cropid='+id;
    return this.http.get<Value>(url);

  }

  submitbid(live:LiveBid): Observable<BidStatus>{
    // alert(live.amount);
    // alert(live.cropid);
    // alert(live.userid);
    let url = 'http://localhost:8585/placebids';
    return this.http.post<BidStatus>(url, live);

  }
}
