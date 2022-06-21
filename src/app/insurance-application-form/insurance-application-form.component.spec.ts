import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceApplicationFormComponent } from './insurance-application-form.component';

describe('InsuranceApplicationFormComponent', () => {
  let component: InsuranceApplicationFormComponent;
  let fixture: ComponentFixture<InsuranceApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
