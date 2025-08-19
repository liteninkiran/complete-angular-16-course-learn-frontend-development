import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    public title = 'angular-signals-example';
    public theme = signal('light');

    public ngOnInit(): void {
        // this.theme.set('dark');
        this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
        // this.theme.update((current) =>
        //     current === 'light' ? 'dark' : 'light',
        // );
        document.body.className = this.theme();
    }
}
