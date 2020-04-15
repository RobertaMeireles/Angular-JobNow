import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurriculumCompanyComponent } from './curriculum-company.component';

describe('CurriculumCompanyComponent', () => {
  let component: CurriculumCompanyComponent;
  let fixture: ComponentFixture<CurriculumCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
