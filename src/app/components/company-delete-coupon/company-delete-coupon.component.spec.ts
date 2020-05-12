import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDeleteCouponComponent } from './company-delete-coupon.component';

describe('CompanyDeleteCouponComponent', () => {
  let component: CompanyDeleteCouponComponent;
  let fixture: ComponentFixture<CompanyDeleteCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDeleteCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDeleteCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
