import { createReducer } from '@ngrx/store';
import { Book } from '../models/book';

export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(initialState);
