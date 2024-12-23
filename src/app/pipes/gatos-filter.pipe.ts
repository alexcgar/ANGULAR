import { Pipe, PipeTransform } from '@angular/core';
import { Cat } from '../interfaces/cat';

@Pipe({
  name: 'gatosFilter'
})
export class GatosFilterPipe implements PipeTransform {

  transform(cats: Cat[], ...search: string[]): Cat[] {
    return cats.filter(c => 
      search.some(term => c.origin.toLowerCase().includes(term.toLowerCase()))
    );
  }

}
