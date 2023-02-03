import { Component } from '@angular/core';


@Component({
  selector: 'ca-root',
  template: `
    <ca-header></ca-header>
    <div class="page">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
