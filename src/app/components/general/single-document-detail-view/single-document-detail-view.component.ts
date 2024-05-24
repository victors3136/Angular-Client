import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-single-document-view',
  templateUrl: './single-document-detail-view.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./single-document-detail-view.component.css']
})
export class SingleDocumentDetailViewComponent implements OnInit {
  document: any;
  content: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private documentsService: DocumentsService
  ) {

  }

  ngOnInit(): void {
    const documentId = this.route.snapshot.paramMap.get('id');
    if (!documentId) {
      window.alert('No document specified?');
      return;
    }
    const id = parseInt(documentId);
    this.documentsService.getOne(id).subscribe({
      next: (response) => {
        console.log(response);
        console.log(response.documents);
        if (!response.success) {
          window.alert(response.message ?? 'Fetching document failed');
          return;
        }
        if (!response.documents) {
          window.alert('Response did not contain a document');
          return;
        }
        this.document = response.documents[0];
        if (!this.document.Contents) {
          window.alert('Document did not contain anything');
          return;
        }
        this.content = this.document.Contents;
      },
      error: (err) => window.alert(err.message)
    });
  }
}

