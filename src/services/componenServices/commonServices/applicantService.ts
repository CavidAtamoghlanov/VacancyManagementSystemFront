import { Injectable } from '@angular/core';
import { HttpclientService } from '../../Externals/httpClientService';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetApplicantDto } from 'src/models/Applicant/GetApplicantDto';
import { AddApplicantDto } from 'src/models/Applicant/AddApplicantDto';
import { UpdateApplicantDto } from 'src/models/Applicant/UpdateApplicantDto';
import { SearchApplicantDto } from 'src/models/Applicant/SearchApplicantDto';



@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  constructor(private httpclientService: HttpclientService) { }

  getAllApplicants(): Observable<GetApplicantDto[]> {
    console.log('Fetching applicants...');
    return this.httpclientService
      .get({ controller: 'Applicant', action: 'GetAllApplicants' })
      .pipe(
        map((response: any) => {
          if (response.statusCode === 200) {
            return response.content as GetApplicantDto[];
          } else {
            throw new Error(response.exceptionMessage || 'Unknown error');
          }
        })
      );
  }

  getApplicantById(id: number): Observable<GetApplicantDto> {
    return this.httpclientService
      .get({ controller: 'Applicant', action: 'GetApplicantById' })
      .pipe(
        map((response: any) => {
          if (response.statusCode === 200) {
            return response.content as GetApplicantDto;
          } else {
            throw new Error(response.exceptionMessage || 'Unknown error');
          }
        })
      );
  }

  createApplicant(applicant: AddApplicantDto): Observable<any> {
    return this.httpclientService
      .post({ controller: 'Applicant', action: 'CreateApplicant' }, applicant)
      .pipe(
        map((response: any) => {
          if (response.statusCode === 200) {
            return response.content;
          } else {
            throw new Error(response.exceptionMessage || 'Unknown error');
          }
        })
      );
  }

  updateApplicant(applicant: UpdateApplicantDto): Observable<any> {
    return this.httpclientService
      .put({ controller: 'Applicant', action: 'UpdateApplicant' }, applicant)
      .pipe(
        map((response: any) => {
          if (response.statusCode === 200) {
            return response.content;
          } else {
            throw new Error(response.exceptionMessage || 'Unknown error');
          }
        })
      );
  }

  deleteApplicant(id: number): Observable<any> {
    return this.httpclientService
      .delete({ controller: 'Applicant', action: `DeleteApplicant/${id}` })
      .pipe(
        map((response: any) => {
          if (response.statusCode === 200) {
            return response.content;
          } else {
            throw new Error(response.exceptionMessage || 'Unknown error');
          }
        })
      );
  }

  getApplicantsForVacancy(vacancyId: number): Observable<GetApplicantDto[]> {
    return this.httpclientService
      .get({ controller: 'Applicant', action: `GetAllApplicantsForVacancy/${vacancyId}`})
      .pipe(
        map((response: any) => {
          if (response.statusCode === 200) {
            return response.content as GetApplicantDto[];
          } else {
            throw new Error(response.exceptionMessage || 'Unknown error');
          }
        })
      );
  }

  searchApplicants(searchDto: SearchApplicantDto): Observable<any> {
    return this.httpclientService
      .post({ controller: 'Applicant', action: 'SearchApplicants' }, searchDto)
      .pipe(
        map((response: any) => {
          if (response.statusCode === 200) {
            return response.content;
          } else {
            throw new Error(response.exceptionMessage || 'Unknown error');
          }
        })
      );
  }

  downloadApplicantCV(applicantId: number): Observable<Blob> {
    return this.httpclientService
      .get({
        controller: 'Applicant',
        action: `DownloadApplicantCV/${applicantId}`,
      })
      .pipe(
        map((response: any) => response as Blob) 
      );
  }
  uploadApplicantCV(applicantId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpclientService
      .post(
        { controller: 'Applicant', action: `UploadApplicantCV/${applicantId}` },
        formData
      )
      .pipe(
        map((response: any) => {
          if (response.statusCode === 200) {
            return response.content;
          } else {
            throw new Error(response.exceptionMessage || 'Unknown error');
          }
        })
      );
  }

}
