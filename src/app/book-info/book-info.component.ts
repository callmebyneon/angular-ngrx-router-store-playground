import { Component, Input } from '@angular/core';
import { Book } from '../book/book.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css'],
})
export class BookInfoComponent {
  @Input() book: Book;
}
