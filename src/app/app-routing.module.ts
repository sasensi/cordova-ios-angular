import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page-1.component';
import { Page2Component } from './page-2.component';


const routes: Routes = [
    { path: 'page-1', component: Page1Component },
    { path: 'page-2', component: Page2Component },

    { path: '**', redirectTo: 'page-1' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule
{
}
