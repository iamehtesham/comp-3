import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPatientComponent } from './no-patient.component';

describe('NoPatientComponent', () => {
  let component: NoPatientComponent;
  let fixture: ComponentFixture<NoPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
