import { TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { DoctorServiceService } from './doctor-service.service';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { delay, of } from 'rxjs';

describe('DoctorServiceService', () => {
  let service: DoctorServiceService;
  let http:HttpClient;
  let httpController:HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DoctorServiceService]
    });
    service = TestBed.inject(DoctorServiceService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpController.verify();
  })


  // it('login api',()=>{
  //   const testData = true;
  //   const inputData = {
  //     username:'admin',
  //     password:'admin'
  //   }

  //   loginService.login(inputData).then((data)=>expect(data).toEqual(testData));

  //   const req = httpController.expectOne('login');

  //   expect(req.request.method).toEqual('POST');

  //   req.flush(testData);
  // })


  it('should call getDoctors',()=>{
    service.getDoctorsList().subscribe(doctors=>{
      expect(doctors).toBeTruthy('No Doctors returned')

      //expect(doctors.length).toBe(0)
    })
    const req = httpController.expectOne('http://localhost:8090/api/doctors')
    expect(req.request.method).toEqual("GET")
    req.flush({})

    
  })

  it('should find a doctor by id',()=>{
    service.getDoctor(1).subscribe(doctor=>{
      expect(doctor).toBeTruthy()
    })
    const req = httpController.expectOne('http://localhost:8090/api/doctors/1')
    expect(req.request.method).toEqual("GET")
    req.flush({})
    
  })

  it('should save the doctor',()=>{

    let doctor = new Doctor();
    doctor.name = 'Arnab';
    doctor.age=23;
    doctor.gender='Male';
    doctor.specialist_fields = 'Bone';

    service.createDoctor(doctor).subscribe(d=>{
      expect(d).toBeTruthy()
    })
    const req = httpController.expectOne('http://localhost:8090/api/doctors')
    expect(req.request.method).toEqual("POST")
    expect(req.request.body.name).toEqual(doctor.name)
    expect(req.request.body.age).toEqual(doctor.age)
    req.flush({})
  })

  afterEach(()=>{
    httpController.verify()
  })
  


});
