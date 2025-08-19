import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
    public users: User[] = [];

    constructor(private userService: UserService) {}

    public ngOnInit(): void {
        this.refreshUsers();
    }

    public refreshUsers(): void {
        this.userService.getUsers().subscribe((users) => (this.users = users));
    }
}
