import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCouponToUpdateComponent } from './company-coupon-to-update.component';

describe('CompanyCouponToUpdateComponent', () => {
  let component: CompanyCouponToUpdateComponent;
  let fixture: ComponentFixture<CompanyCouponToUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCouponToUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCouponToUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
