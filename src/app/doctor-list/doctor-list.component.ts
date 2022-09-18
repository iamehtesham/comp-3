import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorServiceService } from '../doctor-service.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors!:Doctor[];

  constructor(private doctorService:DoctorServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data=>{
      this.doctors = data;
    })
  }

}
