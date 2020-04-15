import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPositionRegisterComponent } from './list-position-register.component';

describe('ListPositionRegisterComponent', () => {
  let component: ListPositionRegisterComponent;
  let fixture: ComponentFixture<ListPositionRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPositionRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPositionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
