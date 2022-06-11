import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <!-- <div class=" flex flex-col"> -->
    <app-machine-overview></app-machine-overview>
  `,
})
export class AppComponent {
  title = 'applicant-test';
}
