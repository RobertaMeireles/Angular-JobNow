import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPositionComponent } from './details-position.component';

describe('DetailsPositionComponent', () => {
  let component: DetailsPositionComponent;
  let fixture: ComponentFixture<DetailsPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
