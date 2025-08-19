import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public users: User[] = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Maria Doe' },
    ];

    constructor() {}

    public getUsers(): Observable<User[]> {
        return of(this.users);
    }
}
