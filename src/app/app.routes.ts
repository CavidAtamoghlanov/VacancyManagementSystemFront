import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ListComponent } from './admin/components/job/list/list.component';
import { ActiveVacanciesList } from './admin/components/job/active-vacancies-list/active-vacancies-list.component';
import { EditVacancyComponent } from './admin/components/job/edit-vacancy-component/edit-vacancy-component.component';
import { AddComponent } from './admin/components/job/add/add.component';
import { ListApplicantComponent } from './admin/components/applicant/list-aplicant/list-aplicant.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'jobs', redirectTo: 'jobs', pathMatch: 'full' }, 
      { path: 'jobs', component: ListComponent }, 
      { path: 'ActiveVacancies', component: ActiveVacanciesList },
      { path: 'edit/:id', component: EditVacancyComponent }, 
      { path: 'add', component: AddComponent },
      { path: 'applicants', component: ListApplicantComponent },
    ],
  },
  {
    path: '',
    component:AdminLayoutComponent
  }
];
