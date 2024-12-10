import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListApplicantComponent } from './list-aplicant.component';

describe('ListApplicantComponent', () => {
  let component: ListApplicantComponent;
  let fixture: ComponentFixture<ListApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListApplicantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
