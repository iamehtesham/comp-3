import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';

import { DoctorListComponent } from './doctor-list.component';

describe('DoctorListComponent', () => {
  let component: DoctorListComponent;
  let fixture: ComponentFixture<DoctorListComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DoctorListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        el = fixture.debugElement;
      });
  });

  //   beforeEach(() => {
  //     fixture = TestBed.createComponent(DoctorListComponent);
  //     component = fixture.componentInstance;
  //     fixture.detectChanges();
  //   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all the doctors in a list', () => {
    const table = el.queryAll(By.css('.table-striped'));
    expect(table).toBeTruthy('Could not find table');
  });
});
