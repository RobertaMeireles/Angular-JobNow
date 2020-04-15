import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPositionComponent } from './all-position.component';

describe('AllPositionComponent', () => {
  let component: AllPositionComponent;
  let fixture: ComponentFixture<AllPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
