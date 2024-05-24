import {Injectable} from '@angular/core';
import {Document} from "../model/document";

@Injectable({
  providedIn: 'root'
})
export class DocumentProliferationService {
  private doc: Document | undefined;

  constructor() {
  }

  setDocument(doc: Document | undefined) {
    this.doc = doc;
  }

  getDocument() {
    return this.doc;
  }
}
