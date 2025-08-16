import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

const key = 'reservations';

@Injectable({
    providedIn: 'root',
})
export class ReservationService {
    private reservations: Reservation[] = [];

    constructor() {}

    public getReservations(): Reservation[] {
        return this.reservations;
    }

    public getReservation(id: string): Reservation | undefined {
        return this.reservations.find((res) => res.id === id);
    }

    public addReservation(reservation: Reservation): void {
        reservation.id = Date.now().toString();
        this.reservations.push(reservation);
        localStorage.setItem(key, JSON.stringify(this.reservations));
    }

    public deleteReservation(id: string): void {
        const index = this.reservations.findIndex((res) => res.id === id);
        this.reservations.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(this.reservations));
    }

    public updateReservation(id: string, reservation: Reservation): void {
        const index = this.reservations.findIndex((res) => res.id === id);
        this.reservations[index] = reservation;
        localStorage.setItem(key, JSON.stringify(this.reservations));
    }
}
