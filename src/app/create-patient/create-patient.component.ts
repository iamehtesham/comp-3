import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorServiceService } from '../doctor-service.service';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patient:Patient = new Patient();
  doctors!:Doctor[]
  obj:any={}
  url!:string;
  doctor_id=1;

  constructor(
    private patientService:PatientServiceService,
    private doctorService:DoctorServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getDoctors(); 
  }

  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data=>{
      this.doctors = data;
    })
  }

  changeDoctor(e:any){
    console.log("Doctor=====>",e.target.value);
    this.doctor_id = e.target.value
  }
 
  savePatient(){
    
    this.patientService.createPatient(this.patient).subscribe((data)=>{
      console.log(data);
      this.obj = data;
      
      this.url = this.doctor_id+'/patients/'+this.obj.id+"/add"
      console.log(this.url);
      this.addPatientToDoctor();
      this.router.navigate(['/doctors'])
    })
  }
  onSubmit(){
    this.savePatient();
  }

  addPatientToDoctor(){
    this.doctorService.addPatientToDoctor(this.url).subscribe((data)=>{
      console.log(data);
      
    })
  }


}
