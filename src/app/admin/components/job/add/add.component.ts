import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '@services/componenServices/commonServices/jobService';

interface GetCategoryDto {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  vacancyForm: FormGroup;
  categories: GetCategoryDto[] = [];
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private router: Router
  ) {
    this.vacancyForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isActive: [false],
      categoryId: ['', Validators.required],
      questionCount: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.jobService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
        this.errorMessage = 'Could not load categories!';
      },
    });
  }

  onAdd(): void {
    if (this.vacancyForm.valid) {
      const newVacancy = this.vacancyForm.value;
      this.jobService.createVacancy(newVacancy).subscribe({
        next: () => {
          alert('Vacancy added successfully!');
          this.router.navigate(['/admin/jobs']);
        },
        error: (error) => {
          console.error('Error creating vacancy:', error);
        },
      });
    } else {
      alert('Form is invalid!');
    }
  }
}
