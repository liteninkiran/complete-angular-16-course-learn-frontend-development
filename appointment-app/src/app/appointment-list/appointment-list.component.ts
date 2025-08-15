import { Component } from '@angular/core';
import { Appointment, DummyAppointment } from '../models/appointment';

@Component({
    selector: 'app-appointment-list',
    templateUrl: './appointment-list.component.html',
    styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
    today: string = DummyAppointment.date;
    appointments: Appointment[] = [];
    newAppointmentTitle: string = '';
    newAppointmentDate: string = this.today;

    public addAppointment() {
        if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
            const appt: Appointment = {
                id: Date.now(),
                title: this.newAppointmentTitle,
                date: this.newAppointmentDate,
            };

            this.appointments.push(appt);
            this.newAppointmentTitle = '';
            this.newAppointmentDate = this.today;
        }
    }
}
