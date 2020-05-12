import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUpdateCouponComponent } from './company-update-coupon.component';

describe('CompanyUpdateCouponComponent', () => {
  let component: CompanyUpdateCouponComponent;
  let fixture: ComponentFixture<CompanyUpdateCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyUpdateCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUpdateCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
