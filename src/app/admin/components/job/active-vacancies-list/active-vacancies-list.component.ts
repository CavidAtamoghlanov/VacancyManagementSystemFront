import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobService } from '@services/componenServices/commonServices/jobService';
import { Vacancy } from 'src/models/vacancy/Vacancy';

@Component({
  selector: 'app-active-vacancies-list',
  templateUrl: './active-vacancies-list.component.html',
  styleUrls: ['./active-vacancies-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ActiveVacanciesList implements OnInit {
  vacancies: Vacancy[] = [];
  errorMessage: string | null = null;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadActiveVacancies();
  }

  loadActiveVacancies(): void {
    this.errorMessage = null;
    this.jobService.getAllActiveVacancies().subscribe({
      next: (data) => {
        this.vacancies = data;
      },
      error: (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Could not load active vacancies!';
      },
    });
  }

  onEdit(vacancyId: number): void {
    console.log('Editing active vacancy:', vacancyId);
  }

  onDelete(vacancyId: number): void {
    const confirmed = confirm('Are you sure you want to delete this vacancy?');
    if (confirmed) {
      this.jobService.delete(vacancyId).subscribe({
        next: () => {
          console.log('Deleted vacancy:', vacancyId);
          this.loadActiveVacancies(); 
        },
        error: (error) => {
          console.error('Error deleting vacancy:', error);
          this.errorMessage = 'Could not delete the vacancy!';
        },
      });
    }
  }
  

  trackById(index: number, item: Vacancy): number {
    return item.id;
  }
}
