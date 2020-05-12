import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetCouponsByCategoryComponent } from './company-get-coupons-by-category.component';

describe('CompanyGetCouponsByCategoryComponent', () => {
  let component: CompanyGetCouponsByCategoryComponent;
  let fixture: ComponentFixture<CompanyGetCouponsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetCouponsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetCouponsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
