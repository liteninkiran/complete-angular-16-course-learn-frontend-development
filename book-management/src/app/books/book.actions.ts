import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

const messages = {
    add: '[Book] Add Book',
    success: '[Book] Add Book Successfully',
    failure: '[Book] Add Book Failure',
    remove: '[Book] Remove Book',
};

type Error = { error: any };
type Remove = { bookId: string };

export const AddBook = createAction(messages.add, props<Book>());
export const AddBookSuccess = createAction(messages.success, props<Book>());
export const AddBookFailure = createAction(messages.failure, props<Error>());
export const RemoveBook = createAction(messages.remove, props<Remove>());
