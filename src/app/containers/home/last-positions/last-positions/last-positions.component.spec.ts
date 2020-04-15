import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPositionsComponent } from './last-positions.component';

describe('LastPositionsComponent', () => {
  let component: LastPositionsComponent;
  let fixture: ComponentFixture<LastPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
