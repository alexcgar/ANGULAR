import { Component } from '@angular/core';
import { GatosPageComponent } from './gatos-page/gatos-page.component';
import { AddCatComponent } from "./add-cats/add-cats.component";

@Component({
  selector: 'app-root',
  imports: [GatosPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-gatos';
}
