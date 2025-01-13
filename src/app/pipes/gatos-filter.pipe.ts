import { Pipe, PipeTransform } from '@angular/core';
import { Cat } from '../interfaces/cat';

@Pipe({
  name: 'gatosFilter'
})
export class GatosFilterPipe implements PipeTransform {

  transform(cats: Cat[], search: string): Cat[] {
    if (!search) return cats;

    // Divide los términos de búsqueda separados por comas y normaliza a minúsculas
    const searchTerms = search.split(',').map(term => term.trim().toLowerCase());

    // Filtra los gatos cuyo origen coincida con alguno de los términos de búsqueda
    return cats.filter(cat =>
      searchTerms.some(term => cat.origin.toLowerCase().includes(term))
    );
  }
}
