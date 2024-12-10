import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobService } from '@services/componenServices/commonServices/jobService';
import { Vacancy } from 'src/models/vacancy/Vacancy';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  errorMessage: string | null = null;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadVacancies();
  }

  loadVacancies(): void {
    this.errorMessage = null; 
    this.jobService.getAll().subscribe({
      next: (data) => {
        this.vacancies = data;
      },
      error: (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Could not load vacancies!';
      },
    });
  }



  onDelete(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this vacancy?');
    if (confirmed) {
      this.jobService.delete(id).subscribe({
        next: () => {
          console.log('Vacancy deleted:', id);
          this.loadVacancies();
        },
        error: (error) => {
          console.error('Error deleting vacancy:', error);
          this.errorMessage = 'Could not delete the vacancy!';
        },
      });
    }
  }
}
