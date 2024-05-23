export class Document {
  ID: number = -1;
  Name: string = '';
  Extension: string = '';
  AuthorID: number = -1;
  Contents: null | Blob | ArrayBuffer = null;

  constructor(
    id: number = -1,
    name: string = '',
    extension: string = '',
    authorId: number = -1,
    contents: null | Blob | ArrayBuffer = null) {

    this.ID = id;
    this.Name = name;
    this.Extension = extension;
    this.AuthorID = authorId;
    this.Contents = contents;
  }

}
