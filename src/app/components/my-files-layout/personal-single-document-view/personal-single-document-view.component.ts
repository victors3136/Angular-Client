import {Component, Input} from '@angular/core';
import {Document} from "../../../model/document";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personal-single-document-view',
  standalone: true,
  imports: [],
  templateUrl: './personal-single-document-view.component.html',
  styleUrl: './personal-single-document-view.component.css'
})
export class PersonalSingleDocumentViewComponent {
  @Input() subject: Document | undefined;

  constructor(private router: Router) {
  }

  viewDocument(): void {
    if (this.subject) {
      const subject: Document = this.subject;
      this.router.navigate(['/document', subject.ID])
        .catch(_discard => {
          window.alert(`Could not find /document/${subject.ID}`);
        });
    }
  }

  deleteDocument(): void {
    if (this.subject) {
      const subject: Document = this.subject;
      this.router.navigate(['/delete', subject.ID])
        .catch(_discard => {
          window.alert(`Could not find /delete/${subject.ID}`);
        });
    }
  }
}
