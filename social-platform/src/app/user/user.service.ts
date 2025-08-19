import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

type User = {
    id: number;
    name: string;
};

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
