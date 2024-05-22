export class Document {
  constructor(
    public name: string = '',
    public extension: string = '',
    public author: number = -1,
    public contents: null | Blob | ArrayBuffer = null) {

  }
}
