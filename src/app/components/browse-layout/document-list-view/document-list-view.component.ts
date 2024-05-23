import {Component, OnInit} from '@angular/core';
import {DocumentsService} from "../../../services/documents.service";
import {Document} from "../../../model/document";
import {SingleDocumentGeneralViewComponent} from "../single-document-view/single-document-general-view.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-document-list-view',
  standalone: true,
  imports: [SingleDocumentGeneralViewComponent, NgForOf],
  templateUrl: './document-list-view.component.html',
  styleUrl: './document-list-view.component.css'
})
export class DocumentListViewComponent implements OnInit {
  public documents: Document[] = [];

  constructor(private service: DocumentsService) {
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
    this.service.getAll().subscribe({
      next: (response) => this.setEntries(response),
      error: (err) => window.alert(err.message ?? 'An error occurred')
    });
  }

  trackByDocumentId(_: number, document: Document): number {
    return document.ID;
  }

}
