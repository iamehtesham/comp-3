import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { DoctorServiceService } from '../doctor-service.service';
import { PatientServiceService } from '../patient-service.service';

import { CreatePatientComponent } from './create-patient.component';

describe('CreatePatientComponent', () => {
  let component: CreatePatientComponent;
  let fixture: ComponentFixture<CreatePatientComponent>;
  let el: DebugElement;
  let doctorsService: any

  beforeEach(async () => {
    const patientServiceSpy = jasmine.createSpyObj('PatientServiceService', [
      'createPatient',
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
        fixture = TestBed.createComponent(CreatePatientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        el=fixture.debugElement;
        //doctorsService = TestBed.get(PatientServiceService)
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
