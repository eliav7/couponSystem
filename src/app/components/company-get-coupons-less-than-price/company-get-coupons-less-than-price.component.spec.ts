import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetCouponsLessThanPriceComponent } from './company-get-coupons-less-than-price.component';

describe('CompanyGetCouponsLessThanPriceComponent', () => {
  let component: CompanyGetCouponsLessThanPriceComponent;
  let fixture: ComponentFixture<CompanyGetCouponsLessThanPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetCouponsLessThanPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetCouponsLessThanPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
