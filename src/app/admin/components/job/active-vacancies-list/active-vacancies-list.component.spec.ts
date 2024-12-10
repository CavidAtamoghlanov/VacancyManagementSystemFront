import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveVacanciesList } from './active-vacancies-list.component';

describe('ActiveVacanciesListComponent', () => {
  let component: ActiveVacanciesList;
  let fixture: ComponentFixture<ActiveVacanciesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveVacanciesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveVacanciesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
