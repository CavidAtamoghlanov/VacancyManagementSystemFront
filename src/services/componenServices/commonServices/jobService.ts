import { Injectable } from '@angular/core';
import { HttpclientService } from './../../Externals/httpClientService';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vacancy } from 'src/models/vacancy/Vacancy';



interface GetCategoryDto {
    id: number;
    name: string;
    description: string;
  }

@Injectable({
    providedIn: 'root',
})
export class JobService {
    constructor(private httpclientService: HttpclientService) { }

    getAll(): Observable<Vacancy[]> {
        return this.httpclientService
            .get({ controller: 'Vacancy', action: 'getVacancies' })
            .pipe(
                map((response: any) => {
                    if (response.statusCode === 200) {
                        return response.content as Vacancy[];
                    } else {
                        throw new Error(response.exceptionMessage || 'Unknown error');
                    }
                })
            );
    };


    getAllActiveVacancies(): Observable<Vacancy[]> {
        return this.httpclientService
            .get({ controller: 'Vacancy', action: 'GetVacancies' })
            .pipe(
                map((response: any) => {
                    if (response.statusCode === 200) {
                        return response.content as Vacancy[];
                    } else {
                        throw new Error(response.exceptionMessage || 'Unknown error');
                    }
                })
            );
    };

    delete(vacancyId: number) {
        return this.httpclientService.get({
          controller: 'Vacancy',
          action: `deleteVacancy/${vacancyId}`, 
        });
      }

      getVacancyById(vacancyId: number) {
        return this.httpclientService.get({
          controller: 'Vacancy',
          action: `GetVacancyById/${vacancyId}`,
        });
      }

      updateVacancy(vacancy: Vacancy): Observable<any> {
        console.log(vacancy);
        return this.httpclientService.put(
          { controller: 'Vacancy', action: 'UpdateVacancy' },
          vacancy
        );
      }
      
      createVacancy(vacancy: any): Observable<any> {
        return this.httpclientService.post(
          { controller: 'Vacancy', action: 'CreateVacancy' },
          vacancy
        );
      }
      
      getAllCategories(): Observable<GetCategoryDto[]> {
        return this.httpclientService
            .get({ controller: 'Category', action: 'GetCategories' })
            .pipe(
                map((response: any) => {
                    if (response.statusCode === 200) {
                        console.log(response.content);
                        return response.content as GetCategoryDto[];
                    }
                    throw new Error(response.exceptionMessage || 'Unknown error');
                })
            );
      }
      
      
}
