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

    public getReservation(id: string): Observable<Reservation> {
        const url = `${this.apiUrl}/reservation/${id}`;
        return this.http.get<Reservation>(url);
    }

    public addReservation(reservation: Reservation): Observable<void> {
        reservation.id = Date.now().toString();
        const url = `${this.apiUrl}/reservation`;
        return this.http.post<void>(url, reservation);
    }

    public deleteReservation(id: string): Observable<void> {
        const url = `${this.apiUrl}/reservation/${id}`;
        return this.http.delete<void>(url);
    }

    public updateReservation(
        id: string,
        reservation: Reservation,
    ): Observable<void> {
        const url = `${this.apiUrl}/reservation/${id}`;
        return this.http.put<void>(url, reservation);
    }
}
