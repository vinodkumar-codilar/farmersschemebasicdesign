import { Component, OnInit } from '@angular/core';
import { Crop } from './crop';
import { cropdto } from './cropdto';
import { CropaddService } from '../cropadd.service';

@Component({
  selector: 'crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent{
  crop: Crop = new Crop();
  cropdto: cropdto = new cropdto();
  constructor(private service:CropaddService) { }

  ngOnInit(): void {
  }  
  process(){
    this.crop.status="Available";
    
    this.cropdto.crop= this.crop;
    this.cropdto.farmerid=  Number(sessionStorage.getItem('UserId'));
    alert(JSON.stringify(this.cropdto));
    this.service.addCrop(this.cropdto).subscribe(data=>{
      alert(JSON.stringify(data))
      
    })
    
  }

}

