import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerWelcome2Component } from './farmer-welcome2.component';

describe('FarmerWelcome2Component', () => {
  let component: FarmerWelcome2Component;
  let fixture: ComponentFixture<FarmerWelcome2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerWelcome2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerWelcome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
