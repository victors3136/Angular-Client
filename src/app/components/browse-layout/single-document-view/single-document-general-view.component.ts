import {Component, Input} from '@angular/core';
import {Document} from "../../../model/document";
import {Router} from "@angular/router";

@Component({
  selector: 'app-single-document-view',
  standalone: true,
  imports: [],
  templateUrl: './single-document-general-view.component.html',
  styleUrl: './single-document-general-view.component.css'
})
export class SingleDocumentGeneralViewComponent {
  @Input() subject: Document | undefined;

  constructor(private router: Router) {
  }

  viewDocument(): void {
    if (this.subject) {
      const subject: Document = this.subject;
      this.router.navigate(['/document',subject.ID])
        .catch(_discard => {
          window.alert(`Could not find /document/${subject.ID}`);
        });
    }
  }
}
