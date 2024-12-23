import { Component, input } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { StartRatingComponent } from '../start-rating/start-rating.component';

@Component({
  selector: 'cat-item', //Podria añadir tr[cat-item] para que se aplique a las filas de una tabla
  imports: [StartRatingComponent],
  templateUrl: './cat-item.component.html',
  styleUrl: './cat-item.component.css'
})
export class CatItemComponent {
  cat = input.required<Cat>();
rating: number = 0;
}
