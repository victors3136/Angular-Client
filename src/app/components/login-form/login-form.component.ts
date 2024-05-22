import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  usernameForm: FormGroup;
  responseMessage: string = '';
  visible: boolean = true;

  constructor(private builder: FormBuilder, private httpClient: LoginService, private router: Router) {
    this.usernameForm = this.builder.group({
      username: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.usernameForm.valid) {
      const username = this.usernameForm.value.username;
      const handleSuccess = (response: { success: boolean, message?: string }) => {
        if (response.success) {
          this.visible = false;
          this.router.navigate(['home'])
            .catch(_discard => window.alert('Could not find home :)'));
        } else {
          this.responseMessage = response.message ?? 'An unexpected error occurred';
          window.alert(this.responseMessage);
        }
      }
      const handleError = (error: any) => {
        this.responseMessage = 'An error occurred';
        window.alert(error);
      };
      this.httpClient.submit(username).subscribe(handleSuccess, handleError);
    }
  }
}
