import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetOneCustomerComponent } from './admin-get-one-customer.component';

describe('AdminGetOneCustomerComponent', () => {
  let component: AdminGetOneCustomerComponent;
  let fixture: ComponentFixture<AdminGetOneCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGetOneCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetOneCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
