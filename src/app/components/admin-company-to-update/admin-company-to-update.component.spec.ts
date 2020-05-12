import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyToUpdateComponent } from './admin-company-to-update.component';

describe('AdminCompanyToUpdateComponent', () => {
  let component: AdminCompanyToUpdateComponent;
  let fixture: ComponentFixture<AdminCompanyToUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyToUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyToUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
