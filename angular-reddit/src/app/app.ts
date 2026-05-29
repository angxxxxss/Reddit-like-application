import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class AppComponent {
  articles: Article[] = [];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // Console log required by the exercise instructions.
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    this.articles.unshift(new Article(title.value, link.value));
    title.value = '';
    link.value = '';

    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.slice().sort((a, b) => b.votes - a.votes);
  }
}
