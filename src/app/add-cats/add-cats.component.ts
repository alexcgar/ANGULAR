import { Component, NgZone, ChangeDetectorRef, signal } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'add-cats',
  standalone: true,
  imports: [FormsModule, CommonModule,DatePipe ],
  templateUrl: './add-cats.component.html',
  styleUrl: './add-cats.component.css',
})
export class AddCatComponent {
 
  currentDate: Date = new Date();

  newCat: Cat = {
    id: 0,
    nombre: '',
    raza: '',
    weight: '',
    temperament: '',
    image: '',
    origin: '',
    intelligence: 0,
  

  };

  cats: Cat[] = [];

  showForm = signal(true);

  toggleForm() {
    this.showForm.update(show => !show);
    this.cdr.detectChanges();
  }

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  addCat(formCat: NgForm) {
    this.newCat.id = 1; // Siempre asignar id 1
    this.cats[0] = { ...this.newCat }; // Reemplazar el primer elemento
    this.newCat = {
      id: 0,
      nombre: '',
      raza: '',
      weight: '',
      temperament: '',
      image: '',
      origin: '',
      intelligence: 0,
    };
    formCat.resetForm();
    this.cdr.detectChanges();
  }

  resetForm() {
    this.newCat = {
      id: 0,
      nombre: '',
      raza: '',
      weight: '',
      temperament: '',
      image: '',
      origin: '',
      intelligence: 0,
    };
    this.cdr.detectChanges(); 
  }

  imgToBase64(input: HTMLInputElement) {
    const file = input.files?.[0];
    if (!file) return;
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.addEventListener('load', () => {
      this.ngZone.run(() => {
        this.newCat.image = filereader.result as string;
        this.cdr.detectChanges(); 
      });
    });
  }
}
