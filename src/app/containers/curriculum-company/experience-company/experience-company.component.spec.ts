import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCompanyComponent } from './experience-company.component';

describe('ExperienceCompanyComponent', () => {
  let component: ExperienceCompanyComponent;
  let fixture: ComponentFixture<ExperienceCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
