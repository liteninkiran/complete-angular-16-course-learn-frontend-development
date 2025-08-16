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
    reservationForm: FormGroup = new FormGroup({});

    constructor(
        private formBuilder: FormBuilder,
        private reservationService: ReservationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}

    public ngOnInit(): void {
        this.reservationForm = this.formBuilder.group(formGroup);
        const id = this.activatedRoute.snapshot.paramMap.get('id');

        if (id) {
            const reservation = this.reservationService.getReservation(id);
            if (reservation) {
                this.reservationForm.patchValue(reservation);
            }
        }
    }

    public onSubmit(): void {
        if (this.reservationForm.valid) {
            const reservation: Reservation = this.reservationForm.value;
            const id = this.activatedRoute.snapshot.paramMap.get('id');

            if (id) {
                this.reservationService.updateReservation(id, reservation);
            } else {
                this.reservationService.addReservation(reservation);
            }

            this.router.navigate(['/list']);
        }
    }
}
