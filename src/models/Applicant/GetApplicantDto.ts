export interface GetApplicantDto {
  id: number;
  userId: string;
  vacancyId: number;
  testScore: number;
  cvPath: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  fullName: string;
}
