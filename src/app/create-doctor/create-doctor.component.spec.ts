import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { DoctorServiceService } from '../doctor-service.service';

import { CreateDoctorComponent } from './create-doctor.component';

describe('CreateDoctorComponent', () => {
  let component: CreateDoctorComponent;
  let fixture: ComponentFixture<CreateDoctorComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    const doctorServiceSpy = jasmine.createSpyObj('DoctorServiceService', [
      'createDoctor',
    ]);
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        {
          provide: DoctorServiceService,
          useValue: doctorServiceSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CreateDoctorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        el = fixture.debugElement;
      });
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
