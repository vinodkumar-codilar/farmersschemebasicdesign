import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceClaimFormComponent } from './insurance-claim-form.component';

describe('InsuranceClaimFormComponent', () => {
  let component: InsuranceClaimFormComponent;
  let fixture: ComponentFixture<InsuranceClaimFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceClaimFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceClaimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
