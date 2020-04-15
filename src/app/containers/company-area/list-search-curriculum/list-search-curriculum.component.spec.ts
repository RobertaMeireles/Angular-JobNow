import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSearchCurriculumComponent } from './list-search-curriculum.component';

describe('ListSearchCurriculumComponent', () => {
  let component: ListSearchCurriculumComponent;
  let fixture: ComponentFixture<ListSearchCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSearchCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSearchCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
