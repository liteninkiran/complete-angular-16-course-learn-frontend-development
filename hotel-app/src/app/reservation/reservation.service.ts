import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReservationService {
    private apiUrl = 'http://localhost:3000';
    private reservations: Reservation[] = [];

    constructor(private http: HttpClient) {}

    public getReservations(): Observable<Reservation[]> {
        const url = `${this.apiUrl}/reservations`;
        return this.http.get<Reservation[]>(url);
    }

    public getReservation(id: string): Reservation | undefined {
        return this.reservations.find((res) => res.id === id);
    }

    public addReservation(reservation: Reservation): void {
        reservation.id = Date.now().toString();
        this.reservations.push(reservation);
    }

    public deleteReservation(id: string): void {
        const index = this.reservations.findIndex((res) => res.id === id);
        this.reservations.splice(index, 1);
    }

    public updateReservation(id: string, reservation: Reservation): void {
        const index = this.reservations.findIndex((res) => res.id === id);
        this.reservations[index] = reservation;
    }
}
