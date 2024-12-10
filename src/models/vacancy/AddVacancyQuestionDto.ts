export interface AddVacancyQuestionDto {
    vacancyId: number;
    questionText: string;
    questionType: string;
    options?: string[];
  }