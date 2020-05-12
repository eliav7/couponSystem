import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetOneCompanyComponent } from './admin-get-one-company.component';

describe('AdminGetOneCompanyComponent', () => {
  let component: AdminGetOneCompanyComponent;
  let fixture: ComponentFixture<AdminGetOneCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGetOneCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetOneCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
