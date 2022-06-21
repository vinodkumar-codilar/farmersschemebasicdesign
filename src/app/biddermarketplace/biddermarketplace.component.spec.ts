import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddermarketplaceComponent } from './biddermarketplace.component';

describe('BiddermarketplaceComponent', () => {
  let component: BiddermarketplaceComponent;
  let fixture: ComponentFixture<BiddermarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddermarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddermarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
