import { Component } from '@angular/core';
import { agenda } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lista_alunos = agenda;

  title = 'AP-FDW';
}
