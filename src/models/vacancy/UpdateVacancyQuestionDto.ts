export interface UpdateVacancyQuestionDto {
    id: number;
    vacancyId: number;
    questionText: string;
    questionType: string;
    options?: string[];
  }
  