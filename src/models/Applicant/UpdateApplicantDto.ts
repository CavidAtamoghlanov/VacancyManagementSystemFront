export interface UpdateApplicantDto {
  id: number;
  userId: string;
  vacancyId: number;
  testScore: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
