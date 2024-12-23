import { Pipe, PipeTransform } from '@angular/core';
import { Cat } from '../interfaces/cat';

@Pipe({
  name: 'gatosFilter'
})
export class GatosFilterPipe implements PipeTransform {

  transform(cats: Cat[], ...search: string[]): Cat[] {
    const searchTerms = search.join(' ').split(',').map(term => term.trim().toLowerCase());
    return cats.filter(c => 
      searchTerms.some(term => c.origin.toLowerCase().includes(term))
    );
  }

}
