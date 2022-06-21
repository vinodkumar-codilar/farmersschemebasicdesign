import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-application-form',
  templateUrl: './insurance-application-form.component.html',
  styleUrls: ['./insurance-application-form.component.css']
})
export class InsuranceApplicationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  click()
  {
    alert(" successfully submitted ");
  }


}



