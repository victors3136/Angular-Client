import {Component, Input, OnInit} from '@angular/core';
import {Document} from "../../../model/document";

@Component({
  selector: 'app-single-document-view',
  standalone: true,
  imports: [],
  templateUrl: './single-document-general-view.component.html',
  styleUrl: './single-document-general-view.component.css'
})
export class SingleDocumentGeneralViewComponent {
  @Input() subject: Document | undefined;

  constructor() {
  }
}
