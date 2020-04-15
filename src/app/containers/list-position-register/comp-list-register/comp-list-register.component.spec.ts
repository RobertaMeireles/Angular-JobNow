import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompListRegisterComponent } from './comp-list-register.component';

describe('CompListRegisterComponent', () => {
  let component: CompListRegisterComponent;
  let fixture: ComponentFixture<CompListRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompListRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompListRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
