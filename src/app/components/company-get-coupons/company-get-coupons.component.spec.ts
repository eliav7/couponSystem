import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetCouponsComponent } from './company-get-coupons.component';

describe('CompanyGetCouponsComponent', () => {
  let component: CompanyGetCouponsComponent;
  let fixture: ComponentFixture<CompanyGetCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
