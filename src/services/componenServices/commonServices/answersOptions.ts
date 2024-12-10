import { Injectable } from "@angular/core";
import { HttpclientService } from "@services/Externals/httpClientService";
import { Observable } from "rxjs";
import { AnswerOptionDto } from "src/models/answerOptions/AnserOptionDto";
import { UpdateAnswerOptionDto } from "src/models/answerOptions/UpdateAnswerOptionDto";


@Injectable({
  providedIn: "root",
})
export class AnswerOptionService {
  constructor(private httpclientService: HttpclientService) {}

  getAnswerOptionsForQuestion(questionId: number): Observable<any> {
    return this.httpclientService.get({
      controller: "AnswerOption",
      action: `GetAnswerOptionsForQuestion/${questionId}`,
    });
  }

  getAnswerOptionById(id: number): Observable<any> {
    return this.httpclientService.get({
      controller: "AnswerOption",
      action: id.toString(),
    });
  }

  createAnswerOption(answerOptionDto: AnswerOptionDto): Observable<any> {
    return this.httpclientService.post(
      {
        controller: "AnswerOption",
        action: "CreateAnswerOption",
      },
      answerOptionDto
    );
  }

  updateAnswerOption(answerOptionDto: UpdateAnswerOptionDto): Observable<any> {
    return this.httpclientService.put(
      {
        controller: "AnswerOption",
        action: `UpdateAnswerOption/${answerOptionDto.id}`,
      },
      answerOptionDto
    );
  }

  deleteAnswerOption(id: number): Observable<any> {
    return this.httpclientService.delete({
      controller: "AnswerOption",
      action: `Delete/${id}`,
    });
  }


  restoreAnswerOption(id: number): Observable<any> {
    const body = { id }; 
    return this.httpclientService.post(
      {
        controller: "AnswerOption",
        action: `Restore/${id}`,
      },
      body
    );
  }
}
