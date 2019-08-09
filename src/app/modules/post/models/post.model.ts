export class Post {
  constructor(
    public id: number,
    public title: string,
    public body?: string,
    public image?: string,
  ) {}
}
