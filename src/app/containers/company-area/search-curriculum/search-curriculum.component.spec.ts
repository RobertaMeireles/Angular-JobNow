import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchCurriculumComponent } from './search-curriculum.component';

describe('SearchCurriculumComponent', () => {
  let component: SearchCurriculumComponent;
  let fixture: ComponentFixture<SearchCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
