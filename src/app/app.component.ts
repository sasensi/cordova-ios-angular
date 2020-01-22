import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <nav>
            <h2>Navigation:</h2>
            <ul>
                <li><a routerLink="/page-1">page 1</a></li>
                <li><a routerLink="/page-2">page 2</a></li>
            </ul>
            <hr>
        </nav>

        <router-outlet></router-outlet>
    `,
    styles  : [],
})
export class AppComponent
{
}
