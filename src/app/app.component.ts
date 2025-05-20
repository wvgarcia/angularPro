import { Component } from '@angular/core';
//import { Router } from '@angular/router'; // Importa RouterOutlet
//import { routes } from './app.routes'; // Importa tus rutas
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  //template: `<router-outlet></router-outlet>`, // Usa router-outlet para mostrar las rutas
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule], // Importa RouterOutlet aquí
})
export class AppComponent {

  constructor(public router: RouterModule) {}

}