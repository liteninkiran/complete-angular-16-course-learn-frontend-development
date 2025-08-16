import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reservation-form',
    templateUrl: './reservation-form.component.html',
    styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
    reservationForm: FormGroup = new FormGroup({});

    constructor(
        private formBuilder: FormBuilder,
        private reservationService: ReservationService,
        private router: Router,
    ) {}

    public ngOnInit(): void {
        this.reservationForm = this.formBuilder.group({
            checkInDate: ['2025-08-25', Validators.required],
            checkOutDate: ['2025-08-29', Validators.required],
            guestName: ['Dave', Validators.required],
            guestEmail: [
                'dave@example.net',
                [Validators.required, Validators.email],
            ],
            roomNumber: ['4', Validators.required],
        });
    }

    public onSubmit(): void {
        if (this.reservationForm.valid) {
            const reservation: Reservation = this.reservationForm.value;
            this.reservationService.addReservation(reservation);
            this.router.navigate(['/list']);
        }
    }
}
