import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorServiceService } from '../doctor-service.service';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  doctors!:Doctor[]
  doctor_id=1;
  doctor:Doctor = new Doctor();

  constructor(private doctorService:DoctorServiceService,
    private router:Router) { }

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

  searchDoctor(){
    this.doctorService.getDoctor(this.doctor_id).subscribe(data=>{
      this.doctor = data
    })
  }
  onSubmit(){
    this.searchDoctor();
  }
}
