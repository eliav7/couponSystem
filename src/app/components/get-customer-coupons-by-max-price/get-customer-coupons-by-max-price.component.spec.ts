import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerCouponsByMaxPriceComponent } from './get-customer-coupons-by-max-price.component';

describe('GetCustomerCouponsByMaxPriceComponent', () => {
  let component: GetCustomerCouponsByMaxPriceComponent;
  let fixture: ComponentFixture<GetCustomerCouponsByMaxPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerCouponsByMaxPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerCouponsByMaxPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
