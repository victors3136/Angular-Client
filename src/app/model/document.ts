export class Document {
  ID: number = -1;
  Name: string = '';
  Extension: string = '';
  Author: string = '';
  Contents: null | Blob = null;

  constructor(
    id: number = -1,
    name: string = '',
    extension: string = '',
    author: string = '',
    contents: null | Blob = null) {

    this.ID = id;
    this.Name = name;
    this.Extension = extension;
    this.Author = author;
    this.Contents = contents;
  }

}
