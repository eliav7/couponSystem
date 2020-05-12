import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetDetailsComponent } from './company-get-details.component';

describe('CompanyGetDetailsComponent', () => {
  let component: CompanyGetDetailsComponent;
  let fixture: ComponentFixture<CompanyGetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
