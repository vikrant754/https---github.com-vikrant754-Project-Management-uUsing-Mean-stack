import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCrudComponent } from './emp-crud.component';

describe('EmpCrudComponent', () => {
  let component: EmpCrudComponent;
  let fixture: ComponentFixture<EmpCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
