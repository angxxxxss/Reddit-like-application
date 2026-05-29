export class Article {
  votes: number;

  constructor(
    public title: string,
    public link: string,
    votes?: number
  ) {
    this.votes = votes ?? 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}
