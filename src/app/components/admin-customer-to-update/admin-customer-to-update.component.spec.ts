import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerToUpdateComponent } from './admin-customer-to-update.component';

describe('AdminCustomerToUpdateComponent', () => {
  let component: AdminCustomerToUpdateComponent;
  let fixture: ComponentFixture<AdminCustomerToUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustomerToUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomerToUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
