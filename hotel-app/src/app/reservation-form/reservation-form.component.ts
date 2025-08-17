import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';

const formGroup = {
    checkInDate: ['', Validators.required],
    checkOutDate: ['', Validators.required],
    guestName: ['', Validators.required],
    guestEmail: ['', [Validators.required, Validators.email]],
    roomNumber: ['', Validators.required],
};

@Component({
    selector: 'app-reservation-form',
    templateUrl: './reservation-form.component.html',
    styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
    public reservationForm: FormGroup = new FormGroup({});
    public id: string | null = null;

    constructor(
        private formBuilder: FormBuilder,
        private reservationService: ReservationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}

    public ngOnInit(): void {
        this.reservationForm = this.formBuilder.group(formGroup);
        this.id = this.activatedRoute.snapshot.paramMap.get('id');

        if (this.id) {
            this.reservationService
                .getReservation(this.id)
                .subscribe((reservation) => {
                    if (reservation) {
                        this.reservationForm.patchValue(reservation);
                    }
                });
        }
    }

    public onSubmit(): void {
        if (this.reservationForm.valid) {
            const reservation: Reservation = this.reservationForm.value;

            if (this.id) {
                this.reservationService
                    .updateReservation(this.id, reservation)
                    .subscribe(() => {
                        console.log('Update request processed');
                    });
            } else {
                this.reservationService
                    .addReservation(reservation)
                    .subscribe((reservation) => {
                        console.log('Create request processed', reservation);
                    });
            }

            this.router.navigate(['/list']);
        }
    }
}
