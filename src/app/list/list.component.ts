import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { bookInit } from '../book/book.actions';
import { selectBooks } from '../book/book.selectors';
import { GoogleBooksService } from '../book/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  books$ = this.store.select(selectBooks);

  constructor(private store: Store, private service: GoogleBooksService) {}

  ngOnInit() {
    this.service.getBooks().subscribe((books) => {
      this.store.dispatch(bookInit({ books }));
    });
  }
}
