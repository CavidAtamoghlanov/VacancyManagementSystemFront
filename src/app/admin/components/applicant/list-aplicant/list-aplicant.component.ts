import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetApplicantDto } from 'src/models/Applicant/GetApplicantDto';
import { ApplicantService } from '@services/componenServices/commonServices/applicantService';

@Component({
  selector: 'app-list-applicant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-aplicant.component.html',
  styleUrls: ['./list-aplicant.component.css'],
})
export class ListApplicantComponent implements OnInit {
  applicants: GetApplicantDto[] = [];
  errorMessage: string | null = null;

  constructor(private applicantService: ApplicantService) {}

  ngOnInit(): void {
    console.log('Initializing ListApplicantComponent'); 
    // this.loadApplicants();
  }

  loadApplicants(): void {
    console.log('Loading applicants...');
    this.applicantService.getAllApplicants().subscribe({
      next: (data: GetApplicantDto[]) => {
        this.applicants = data;
        console.log('Applicants loaded:', this.applicants);
      },
      error: (error: any) => {
        console.error('Error loading applicants:', error);
        this.errorMessage = 'Could not load applicants!';
      },
    });
  }
}
