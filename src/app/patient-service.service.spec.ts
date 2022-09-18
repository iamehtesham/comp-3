import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Patient } from './patient';

import { PatientServiceService } from './patient-service.service';

describe('PatientServiceService', () => {
  let service: PatientServiceService;
  let http:HttpClient
  let httpController:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[PatientServiceService]
    });
    service = TestBed.inject(PatientServiceService);
    http = TestBed.inject(HttpClient)
    httpController = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
      httpController.verify()
  })

  it('should call getPatient by id', () => {
    service.getPatient(1).subscribe(patient=>{
        expect(patient).toBeTruthy();
    })
    const req = httpController.expectOne('http://localhost:8090/api/patients/1')
    expect(req.request.method).toEqual("GET")
    req.flush({})
  });

  it('should save the patient',()=>{
      let patient = new Patient()
      patient.name = "Ayush";
      patient.age = 26;
      patient.dateOfVisit = "24-09-2021"

      service.createPatient(patient).subscribe(p=>{
          expect(p).toBeTruthy()
      })
      const req = httpController.expectOne('http://localhost:8090/api/patients')
      expect(req.request.method).toEqual("POST")
      req.flush({})

  })
});
