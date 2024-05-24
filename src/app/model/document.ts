export class Document {
  ID: number;
  Name: string;
  Extension: string;
  Author: string;
  Contents: string;

  constructor(
    id: number = -1,
    name: string = '',
    extension: string = '',
    author: string = '',
    contents: string = '') {

    this.ID = id;
    this.Name = name;
    this.Extension = extension;
    this.Author = author;
    this.Contents = contents;
  }

}
