export interface Appointment {
    id: number;
    title: string;
    date: string;
}

export const DummyAppointment: Appointment = {
    id: 1,
    title: 'Walk the dog',
    date: new Date().toISOString().split('T')[0],
};
