import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

const key = 'books';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
    public title: string = '';
    public author: string = '';
    public books: Book[] = [];

    public ngOnInit(): void {
        const savedBooks = localStorage.getItem(key);
        this.books = savedBooks ? JSON.parse(savedBooks) : [];
    }

    public addBook(): void {
        if (this.title && this.author) {
            const book: Book = {
                id: Date.now(),
                title: this.title,
                author: this.author,
            };

            this.books.push(book);
            this.title = '';
            this.author = '';
            this.storeData();
        }
    }

    public deleteBook(index: number): void {
        this.books.splice(index, 1);
        this.storeData();
    }

    private storeData(): void {
        const data = JSON.stringify(this.books);
        localStorage.setItem(key, data);
    }
}
