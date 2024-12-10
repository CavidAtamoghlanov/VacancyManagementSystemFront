import { Injectable } from "@angular/core";
import { HttpclientService } from "@services/Externals/httpClientService";
import { Observable } from "rxjs";
import { ChangePasswordDto } from "src/models/auth/ChangePasswordDto";
import { ForgotPasswordDto } from "src/models/auth/ForgotPasswordDto";
import { LoginDto } from "src/models/auth/LoginDto";
import { RegisterDto } from "src/models/auth/RegisterDto";
import { ResetPasswordDto } from "src/models/auth/ResetPasswordDto";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private httpclientService: HttpclientService) {}

  register(registerDto: RegisterDto): Observable<any> {
    return this.httpclientService.post(
      {
        controller: "Auth",
        action: "Register",
      },
      registerDto
    );
  }

  login(loginDto: LoginDto): Observable<any> {
    return this.httpclientService.post(
      {
        controller: "Auth",
        action: "Login",
      },
      loginDto
    );
  }

  changePassword(changePasswordDto: ChangePasswordDto): Observable<any> {
    return this.httpclientService.post(
      {
        controller: "Auth",
        action: "ChangePassword",
      },
      changePasswordDto
    );
  }

  forgotPassword(forgotPasswordDto: ForgotPasswordDto): Observable<any> {
    return this.httpclientService.post(
      {
        controller: "Auth",
        action: "ForgotPassword",
      },
      forgotPasswordDto
    );
  }

  resetPassword(resetPasswordDto: ResetPasswordDto): Observable<any> {
    return this.httpclientService.post(
      {
        controller: "Auth",
        action: "ResetPassword",
      },
      resetPasswordDto
    );
  }

  accessDenied(): Observable<any> {
    return this.httpclientService.get({
      controller: "Auth",
      action: "AccessDenied",
    });
  }
}
