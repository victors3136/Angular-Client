import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-home-button-layout',
  standalone: true,
  imports: [],
  templateUrl: './home-button-layout.component.html',
  styleUrl: './home-button-layout.component.css'
})
export class HomeButtonLayoutComponent {
  constructor(private router: Router, private session: SessionService) {
  }

  submit(option: string) {
    switch (option) {
      case 'log-out':
        this.session.logout();
        this.router.navigate(['']).catch(_ => window.alert(`Could not find ${option}`));
        break;
      case 'my-files':
      case 'upload':
      case 'browse':
        this.router.navigate([option]).catch(_ => window.alert(`Could not find ${option}`));
        break;
      default:
        return;
    }
  }
}
