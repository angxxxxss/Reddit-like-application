import { Component, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class ArticleComponent {
  @Input() article!: Article;
}
