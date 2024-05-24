import {Component} from '@angular/core';
import {Document} from "../../../model/document";
import {DocumentsService} from "../../../services/documents.service";
import {SessionService} from "../../../services/session.service";
import {
  SingleDocumentGeneralViewComponent
} from "../../browse-layout/single-document-view/single-document-general-view.component";
import {NgForOf} from "@angular/common";
import {
  PersonalSingleDocumentViewComponent
} from "../personal-single-document-view/personal-single-document-view.component";
import {catchError, EMPTY} from "rxjs";

@Component({
  selector: 'app-personal-document-list-view',
  standalone: true,
  imports: [
    SingleDocumentGeneralViewComponent,
    NgForOf,
    PersonalSingleDocumentViewComponent
  ],
  templateUrl: './personal-document-list-view.component.html',
  styleUrl: './personal-document-list-view.component.css'
})
export class PersonalDocumentListViewComponent {
  public documents: Document[] = [];

  constructor(private service: DocumentsService, private session: SessionService) {
  }

  setEntries(props: { success: boolean, documents?: Document[], message?: string }) {
    console.log(props);
    if (!props.success) {
      window.alert(props.message ?? "");
      return;
    }
    this.documents = props.documents ?? [];
  }


  ngOnInit(): void {
    if (this.session.getUsername() === null) {
      window.alert('You are not logged in!');
      return;
    }
    const username: string = (this.session.getUsername() ?? '');
    this.service.getMine(username).subscribe({
      next: (response) => this.setEntries(response),
      error: (err) => window.alert(err.message ?? 'An error occurred')
    });
  }

  trackByDocumentId(_: number, document: Document): number {
    return document.ID;
  }
}
