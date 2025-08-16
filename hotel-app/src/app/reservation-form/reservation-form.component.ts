import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-reservation-form',
    templateUrl: './reservation-form.component.html',
    styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent {
    reservationForm: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) {}

    public onSubmit(): void {}
}
