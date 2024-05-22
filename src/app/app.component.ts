import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {HomeButtonLayoutComponent} from "./components/home-button-layout/home-button-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginFormComponent, HomeButtonLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'L07';
  protected readonly LoginFormComponent = LoginFormComponent;
}
