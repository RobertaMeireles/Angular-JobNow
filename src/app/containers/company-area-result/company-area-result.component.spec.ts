import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyAreaResultComponent } from './company-area-result.component';

describe('CompanyAreaResultComponent', () => {
  let component: CompanyAreaResultComponent;
  let fixture: ComponentFixture<CompanyAreaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAreaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAreaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
