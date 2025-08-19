import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { User } from '../user.model';

const users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Maria Doe' },
];

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    let userService: UserService;
    let userServiceSpy: jasmine.Spy;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserListComponent],
            providers: [UserService],
        }).compileComponents();

        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;

        userService = TestBed.inject(UserService);
        userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(
            of(users),
        );
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
