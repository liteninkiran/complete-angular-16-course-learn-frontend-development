export interface Appointment {
    id: number;
    title: string;
    date: Date;
}

export const DummyAppointment: Appointment = {
    id: 1,
    title: 'Walk the dog',
    date: new Date('2025-08-15'),
};
