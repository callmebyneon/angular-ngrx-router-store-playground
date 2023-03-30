import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectBook } from './book.selectors';
import { GoogleBooksService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  book$ = this.store.select(selectBook);
  bookId: string;
  bookInfo: any;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private service: GoogleBooksService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.bookId = params['bookId'];
    });

    this.book$.subscribe((book) => {
      if (!book) {
        this.service.getBook(this.bookId).subscribe((book) => {
          this.bookInfo = book;
        });
      }
    });
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
