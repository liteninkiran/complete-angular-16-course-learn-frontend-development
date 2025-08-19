import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookService } from './book.service';

@Injectable()
export class BookEffects {
    addBook$ = createEffect(() => {});

    constructor(private actions$: Actions, private bookService: BookService) {}
}
