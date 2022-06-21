import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsoldhistoryComponent } from './viewsoldhistory.component';

describe('ViewsoldhistoryComponent', () => {
  let component: ViewsoldhistoryComponent;
  let fixture: ComponentFixture<ViewsoldhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsoldhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsoldhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
