import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from '../../../model/document';

@Component({
  selector: 'app-single-document-view',
  templateUrl: './single-document-general-view.component.html',
  styleUrls: ['./single-document-general-view.component.css']
})
export class SingleDocumentDetailViewComponent {
  @Input() subject: Document | undefined;

  constructor(private router: Router) {}

  viewDocument(): void {
    if (this.subject) {
      this.router.navigate(['/document', this.subject.ID]);
    }
  }
}

