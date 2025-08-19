import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    public title = 'angular-signals-example';
    public price = 20;
    public quantity = signal(10);
    public totalPrice = computed(() => this.price * this.quantity());

    public changeQuantity(event: Event) {
        this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
    }
}
