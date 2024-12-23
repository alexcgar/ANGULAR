import { NgClass } from '@angular/common';
import { Component, linkedSignal, model, signal } from '@angular/core';

@Component({
  selector: 'start-rating',
  imports: [NgClass],
  templateUrl: './start-rating.component.html',
  styleUrl: './start-rating.component.css'
})
export class StartRatingComponent {
  rating = model.required<number>();
  auxRating = linkedSignal(() => this.rating());
}
