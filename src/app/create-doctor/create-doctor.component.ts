import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorServiceService } from '../doctor-service.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor:Doctor = new Doctor();

  constructor(private doctorService:DoctorServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  saveDoctor(){
    this.doctorService.createDoctor(this.doctor).subscribe((data)=>{
      this.router.navigate(['/doctors'])
    })
  }
  onSubmit(){
    this.saveDoctor();
  }

}
