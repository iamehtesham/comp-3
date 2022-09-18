import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  private baseURL = 'http://localhost:8090/api/doctors'
  constructor(private httpClient:HttpClient) { }

 
  getDoctorsList():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }
  createDoctor(doctor:Doctor):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,doctor);
  }
  addPatientToDoctor(url:string){
    return this.httpClient.post(`${this.baseURL}/${url}`,"");
  }

  getDoctor(id:number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/${id}`)
  }
}
