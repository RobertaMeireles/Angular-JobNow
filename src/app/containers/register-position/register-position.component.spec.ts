import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPositionComponent } from './register-position.component';

describe('RegisterPositionComponent', () => {
  let component: RegisterPositionComponent;
  let fixture: ComponentFixture<RegisterPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
