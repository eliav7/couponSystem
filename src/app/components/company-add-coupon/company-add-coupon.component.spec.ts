import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddCouponComponent } from './company-add-coupon.component';

describe('CompanyAddCouponComponent', () => {
  let component: CompanyAddCouponComponent;
  let fixture: ComponentFixture<CompanyAddCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
