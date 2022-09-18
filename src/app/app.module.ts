import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { NoPatientComponent } from './no-patient/no-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    DoctorListComponent,
    SearchDoctorComponent,
    SearchPatientComponent,
    NoPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
