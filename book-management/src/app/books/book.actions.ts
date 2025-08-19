import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

const messages = {
    add: '[Book] Add Book',
    remove: '[Book] Remove Book',
};

type Remove = { bookId: string };

export const AddBook = createAction(messages.add, props<Book>());
export const RemoveBook = createAction(messages.remove, props<Remove>());
