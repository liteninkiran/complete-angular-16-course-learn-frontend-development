import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { AddBook, RemoveBook } from '../books/book.actions';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
    public books$: Observable<Book[]>;

    constructor(private store: Store<{ books: Book[] }>) {
        this.books$ = store.pipe(select('books'));
    }

    public addBook(id: string, title: string, author: string) {
        this.store.dispatch(AddBook({ id, title, author }));
    }

    public removeBook(bookId: string) {
        this.store.dispatch(RemoveBook({ bookId }));
    }
}
