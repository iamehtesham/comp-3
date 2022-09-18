import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { PatientServiceService } from '../patient-service.service';

import { SearchDoctorComponent } from './search-doctor.component';

describe('SearchDoctorComponent', () => {
  let component: SearchDoctorComponent;
  let fixture: ComponentFixture<SearchDoctorComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    const doctorServiceSpy = jasmine.createSpyObj('DoctorServiceService', [
      'getDoctor',
    ]);
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers:[{
          provide:PatientServiceService,
          useValue:doctorServiceSpy
      }]
    }).compileComponents().then(()=>{
        fixture = TestBed.createComponent(SearchDoctorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        el = fixture.debugElement;
    });
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
