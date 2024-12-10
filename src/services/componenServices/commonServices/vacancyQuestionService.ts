import { Injectable } from "@angular/core";
import { HttpclientService } from "@services/Externals/httpClientService";
import { Observable } from "rxjs";
import { AddVacancyQuestionDto } from "src/models/vacancy/AddVacancyQuestionDto";
import { UpdateVacancyQuestionDto } from "src/models/vacancy/UpdateVacancyQuestionDto";




@Injectable({
  providedIn: "root",
})
export class VacancyQuestionService {
  constructor(private httpclientService: HttpclientService) {}

  getQuestionsForVacancy(vacancyId: number): Observable<any> {
    return this.httpclientService.get({
      controller: "VacancyQuestion",
      action: `GetQuestionsForVacancy/${vacancyId}`,
    });
  }

  getQuestionById(id: number): Observable<any> {
    return this.httpclientService.get({
      controller: "VacancyQuestion",
      action: `GetQuestionById/${id}`,
    });
  }

  createQuestion(questionDto: AddVacancyQuestionDto): Observable<any> {
    return this.httpclientService.post(
      {
        controller: "VacancyQuestion",
        action: "CreateQuestion",
      },
      questionDto
    );
  }

  updateQuestion(questionDto: UpdateVacancyQuestionDto): Observable<any> {
    return this.httpclientService.put(
      {
        controller: "VacancyQuestion",
        action: "UpdateQuestion",
      },
      questionDto
    );
  }

  deleteQuestion(id: number): Observable<any> {
    return this.httpclientService.delete({
      controller: "VacancyQuestion",
      action: `DeleteQuestion/${id}`,
    });
  }
}
