import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPositionLogoffComponent } from './search-position-logoff.component';

describe('SearchPositionLogoffComponent', () => {
  let component: SearchPositionLogoffComponent;
  let fixture: ComponentFixture<SearchPositionLogoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPositionLogoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPositionLogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
