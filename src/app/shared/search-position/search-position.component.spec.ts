import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPositionComponent } from './search-position.component';

describe('SearchPositionComponent', () => {
  let component: SearchPositionComponent;
  let fixture: ComponentFixture<SearchPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
