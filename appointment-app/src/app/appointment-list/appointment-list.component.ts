import { Component } from '@angular/core';
import { Appointment, DummyAppointment } from '../models/appointment';

@Component({
    selector: 'app-appointment-list',
    templateUrl: './appointment-list.component.html',
    styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
    appointment: Appointment = DummyAppointment;
}
