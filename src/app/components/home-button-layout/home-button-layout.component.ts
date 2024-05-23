import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-button-layout',
  standalone: true,
  imports: [],
  templateUrl: './home-button-layout.component.html',
  styleUrl: './home-button-layout.component.css'
})
export class HomeButtonLayoutComponent {
  constructor(private router: Router) {
  }

  submit(option: string) {
    switch (option) {
      case 'my-files':
      case 'upload':
      case 'browse':
      case 'log-out':
        this.router.navigate([option]).catch(_ => window.alert(`Could not find ${option}`));
        break;
      default:
        return;
    }
  }
}
