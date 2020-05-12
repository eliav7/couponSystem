import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChooseCouponComponent } from './customer-choose-coupon.component';

describe('CustomerChooseCouponComponent', () => {
  let component: CustomerChooseCouponComponent;
  let fixture: ComponentFixture<CustomerChooseCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerChooseCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerChooseCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
