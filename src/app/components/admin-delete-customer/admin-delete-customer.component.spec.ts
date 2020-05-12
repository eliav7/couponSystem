import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteCustomerComponent } from './admin-delete-customer.component';

describe('AdminDeleteCustomerComponent', () => {
  let component: AdminDeleteCustomerComponent;
  let fixture: ComponentFixture<AdminDeleteCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
