import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobService } from '@services/componenServices/commonServices/jobService';

@Component({
  selector: 'app-edit-vacancy-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-vacancy-component.component.html',
  styleUrls: ['./edit-vacancy-component.component.css']
})
export class EditVacancyComponent implements OnInit {
  public vacancyForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private fb: FormBuilder
  ) {
    this.vacancyForm = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
      isActive: [false]
    });
  }

  ngOnInit(): void {
    const vacancyId = this.route.snapshot.params['id'];
    console.log(vacancyId);
    if (!vacancyId) {
      this.errorMessage = 'Invalid vacancy ID!';
      return;
    }

    console.log(vacancyId);
    this.jobService.getVacancyById(vacancyId).subscribe({
      next: (vacancy: any) => {
        this.vacancyForm.patchValue(vacancy.content);
      },
      error: (error) => {
        console.error('Error fetching vacancy:', error);
        this.errorMessage = 'Could not load vacancy details!';
      },
    });
  }

  onUpdate(): void {
    if (this.vacancyForm.valid) {
      const updatedVacancy = this.vacancyForm.value;
      this.jobService.updateVacancy(updatedVacancy).subscribe({
        next: () => {
          console.log('Vacancy updated successfully');
          this.router.navigate(['/admin/jobs']);
        },
        error: (error) => {
          console.error('Error updating vacancy:', error);
          this.errorMessage = 'Could not update the vacancy!';
        },
      });
    }
  }
}
