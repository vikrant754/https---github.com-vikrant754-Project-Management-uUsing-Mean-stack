import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpManagementComponent } from './emp-management.component';

describe('EmpManagementComponent', () => {
  let component: EmpManagementComponent;
  let fixture: ComponentFixture<EmpManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
