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
  add = (data: { user: string, document: Document }) => {
    console.log(data);
    return this.httpClient.post<{
      success: boolean,
      message?: string
    }>(this.addUrl, data);
  }

  private editUrl: string = 'http://localhost/server/edit-document.php';
  edit = (id: number, data: { user: string | undefined, document: Document }) => {
    console.log(data);
    return this.httpClient.put<{
      success: boolean,
      message?: string
    }>(`${this.editUrl}/${id}`, data);
  }

  private deleteUrl: string = 'http://localhost/server/delete-document.php';
  delete = (id: number) => {
    console.log(`Calling delete on ${this.deleteUrl}/${id}`);
    return this.httpClient.delete<{ success: boolean, message?: string }>(this.deleteUrl + "/" + id);
  }

}
