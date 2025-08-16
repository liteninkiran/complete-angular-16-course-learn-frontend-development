import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

const key = 'appointments';

@Component({
    selector: 'app-appointment-list',
    templateUrl: './appointment-list.component.html',
    styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
    today: string = new Date().toISOString().split('T')[0];
    appointments: Appointment[] = [];
    newAppointmentTitle: string = '';
    newAppointmentDate: Date = new Date();

    public ngOnInit(): void {
        const savedAppointments = localStorage.getItem(key);
        this.appointments = savedAppointments
            ? JSON.parse(savedAppointments)
            : [];
    }

    public addAppointment(): void {
        if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
            const appt: Appointment = {
                id: Date.now(),
                title: this.newAppointmentTitle,
                date: this.newAppointmentDate,
            };

            this.appointments.push(appt);
            this.newAppointmentTitle = '';
            this.newAppointmentDate = new Date();
            this.storeAppointments();
        }
    }

    public deleteAppointment(index: number): void {
        this.appointments.splice(index, 1);
        this.storeAppointments();
    }

    private storeAppointments(): void {
        const data = JSON.stringify(this.appointments);
        localStorage.setItem(key, data);
    }
}
