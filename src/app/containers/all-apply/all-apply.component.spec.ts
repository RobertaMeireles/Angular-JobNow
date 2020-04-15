import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApplyComponent } from './all-apply.component';

describe('AllApplyComponent', () => {
  let component: AllApplyComponent;
  let fixture: ComponentFixture<AllApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
