import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DocumentsService} from "../../../services/documents.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-single-document-delete',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './single-document-delete.component.html',
  styleUrl: './single-document-delete.component.css'
})
export class SingleDocumentDeleteComponent implements OnInit {
  response: { success: boolean, message?: string } | null = null;

  constructor(private route: ActivatedRoute, private documentsService: DocumentsService) {

  }

  ngOnInit(): void {
    const documentId = this.route.snapshot.paramMap.get('id');
    if (!documentId) {
      window.alert('No document specified?');
      return;
    }
    const id = parseInt(documentId);
    this.documentsService.delete(id).subscribe({
      next: (response) => {
        console.log(response);
        this.response = response;
      }
    });
  }
}
