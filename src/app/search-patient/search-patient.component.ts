import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css'],
})
export class SearchPatientComponent implements OnInit {
  searchId!: number;
  patient: Patient = new Patient();

  constructor(private patientService: PatientServiceService,private router:Router) {}

  ngOnInit(): void {}

  searchPatient() {
    this.patientService.getPatient(this.searchId).subscribe((data) => {
      this.patient = data;
    },(error)=>{
      console.log(error)
      this.router.navigate(['/no-patient'])
    });
  }

  onSubmit() {
    this.searchPatient();
  }
}
