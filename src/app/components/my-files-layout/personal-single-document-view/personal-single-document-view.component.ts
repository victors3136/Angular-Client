import {Component, Input} from '@angular/core';
import {Document} from "../../../model/document";

@Component({
  selector: 'app-personal-single-document-view',
  standalone: true,
  imports: [],
  templateUrl: './personal-single-document-view.component.html',
  styleUrl: './personal-single-document-view.component.css'
})
export class PersonalSingleDocumentViewComponent {
  @Input() subject: Document | undefined;

  constructor() {
  }
}
