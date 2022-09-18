import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private baseURL = 'http://localhost:8090/api/patients'

  constructor(private httpClient:HttpClient) { }

  createPatient(patient:Patient):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,patient);
  }

  getPatient(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`)
  }
}
