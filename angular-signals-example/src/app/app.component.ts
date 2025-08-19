import { Component, effect, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    public title = 'angular-signals-example';
    public theme = signal('light');
    public label = this.theme();

    constructor() {
        effect(() => {
            this.label = this.theme();
        });
    }

    public toggleDarkMode(): void {
        this.theme.update((current) =>
            current === 'light' ? 'dark' : 'light',
        );
    }
}
