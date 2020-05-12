import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPurchaseCouponComponent } from './customer-purchase-coupon.component';

describe('CustomerPurchaseCouponComponent', () => {
  let component: CustomerPurchaseCouponComponent;
  let fixture: ComponentFixture<CustomerPurchaseCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPurchaseCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPurchaseCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
