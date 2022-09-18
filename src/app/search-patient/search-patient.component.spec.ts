import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { PatientServiceService } from '../patient-service.service';

import { SearchPatientComponent } from './search-patient.component';

describe('SearchPatientComponent', () => {
  let component: SearchPatientComponent;
  let fixture: ComponentFixture<SearchPatientComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    const patientServiceSpy = jasmine.createSpyObj('PatientServiceService', [
      'getPatient',
    ]);
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        {
          provide: PatientServiceService,
          useValue: patientServiceSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SearchPatientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        el = fixture.debugElement;
      });
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
