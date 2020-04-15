import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAreaComponent } from './applicant-area.component';

describe('ApplicantAreaComponent', () => {
  let component: ApplicantAreaComponent;
  let fixture: ComponentFixture<ApplicantAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
