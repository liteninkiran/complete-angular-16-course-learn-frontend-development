import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
    constructor(private store: Store<{ books: Book[] }>) {}

    public addBook(id: string, title: string, author: string) {
        this.store.dispatch(AddBook({ id, title, author }));
    }

    public removeBook(bookId: string) {
        this.store.dispatch(RemoveBook({ bookId }));
    }
}
