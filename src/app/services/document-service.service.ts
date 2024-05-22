import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {
  private getAllUrl: string = 'http://localhost/get-all-documents.php';
  private getMineUrl: string = 'http://localhost/get-my-documents.php';
  private addUrl: string = 'http://localhost/add-document.php';
  private editUrl: string = 'http://localhost/edit-document.php';
  private deleteUrl: string = 'http://localhost/delete-document.php';

  constructor() {
  }
}
