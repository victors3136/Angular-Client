import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Document} from "../model/document";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  constructor(private httpClient: HttpClient) {
  }

  private getAllUrl: string = 'http://localhost/server/get-all-documents.php';
  getAll = () => this.httpClient.get<{ success: boolean, documents?: Document[], message?: string }>(this.getAllUrl);

  private getMineUrl: string = 'http://localhost/server/get-my-documents.php';
  getMine = (username: string) => this.httpClient.get<{
    success: boolean,
    documents?: Document[],
    message?: string
  }>(this.getMineUrl + '?username=' + username);

  private getOneUrl: string = 'http://localhost/server/get-one-document.php';
  getOne = (id: number) => this.httpClient.get<{
    success: boolean,
    documents?: Document[],
    message?: string
  }>(this.getOneUrl + '?id=' + id);

  private addUrl: string = 'http://localhost/server/add-document.php';
  add = (document: Document) => this.httpClient.post(this.addUrl, document);

  private editUrl: string = 'http://localhost/server/edit-document.php';
  edit = (id: number, document: Document) => this.httpClient.put(this.editUrl + "/" + id, document);

  private deleteUrl: string = 'http://localhost/server/delete-document.php';
  delete = (id: number) => this.httpClient.delete(this.deleteUrl + "/" + id);

}
