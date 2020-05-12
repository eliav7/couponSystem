import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteCompanyComponent } from './admin-delete-company.component';

describe('AdminDeleteCompanyComponent', () => {
  let component: AdminDeleteCompanyComponent;
  let fixture: ComponentFixture<AdminDeleteCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
