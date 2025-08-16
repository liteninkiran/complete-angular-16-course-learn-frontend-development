import { Component } from '@angular/core';
import { Appointment, DummyAppointment } from '../models/appointment';

@Component({
    selector: 'app-appointment-list',
    templateUrl: './appointment-list.component.html',
    styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
    today: string = new Date().toISOString().split('T')[0];
    appointments: Appointment[] = [];
    newAppointmentTitle: string = '';
    newAppointmentDate: Date = new Date();

    public addAppointment() {
        if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
            const appt: Appointment = {
                id: Date.now(),
                title: this.newAppointmentTitle,
                date: this.newAppointmentDate,
            };

            this.appointments.push(appt);
            this.newAppointmentTitle = '';
            this.newAppointmentDate = new Date();
        }
    }
}
