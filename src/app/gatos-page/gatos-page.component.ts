import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { FormsModule } from '@angular/forms';
import { GatosFilterPipe } from '../pipes/gatos-filter.pipe';
import { CatItemComponent } from '../cat-item/cat-item.component';
import { AddCatComponent } from '../add-cats/add-cats.component';

@Component({
  selector: 'gatos-page',
  imports: [
    FormsModule,
    GatosFilterPipe,
    CatItemComponent,
    AddCatComponent
  ],
  templateUrl: './gatos-page.component.html',
  styleUrl: './gatos-page.component.css',
})

export class GatosPageComponent {
  cats: Cat[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.fetchGatos();
  }

  search = '';
  showPage = true;
  countries: string[] = [];

  toggleShowPage() {
    if (!this.showPage) {
      this.showPage = true;
    } else {
      this.showPage = !this.showPage;
    }
    this.cdr.detectChanges();
  }
  
  


  fetchGatos() {
    fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key':
          'live_hW9MqiVA7CcKIczFqAHKAT8x2DYNmNLWzRdd5Wv3mvTivxBmum7QcazcnAxxcwtd',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.cats = data.map((cat: any) => ({
          id: cat.id,
          nombre: cat.name,
          raza: cat.breed,
          lifespan: cat.life_span || 0,
          weight: cat.weight.metric.split(' ')[0],
          temperament: cat.temperament ? cat.temperament.split(', ').slice(0, 3).join(', ') : 'Desconocido',
          image: cat.image?.url || 'https://via.placeholder.com/150',
          origin: cat.origin,
          intelligence: cat.intelligence || 0,
        }));
        this.countries = [...new Set(this.cats.map((cat) => cat.origin))];
        console.log(this.countries);
        this.cdr.detectChanges(); // Actualiza la vista con los datos de los gatos en vez de usar el Zone.js
      })
      .catch((error) => console.error('Error fetching gatos:', error));
  }

  orderIntelligence() {
    this.cats = [...this.cats.sort((a, b) => b.intelligence - a.intelligence)];
  }

  countryFlags: { [key: string]: string } = {
    Egypt: 'https://img.icons8.com/color/48/egypt-circular.png',
    Greece: 'https://img.icons8.com/color/48/greece-circular.png',
    'United States': 'https://img.icons8.com/color/48/usa-circular.png',
    'United Arab Emirates':
      'https://img.icons8.com/color/48/united-arab-emirates-circular.png',
    Australia: 'https://img.icons8.com/color/48/australia-circular.png',
    France: 'https://img.icons8.com/color/48/france-circular.png',
    'United Kingdom':
      'https://img.icons8.com/color/48/great-britain-circular.png',
    Burma: 'https://img.icons8.com/color/48/myanmar-circular.png',
    Canada: 'https://img.icons8.com/fluency/48/canada-circular.png',
    Cyprus: 'https://img.icons8.com/fluency/48/cyprus-circular.png',
    Russia: 'https://img.icons8.com/fluency/48/russian-federation-circular.png',
    China: 'https://img.icons8.com/fluency/48/china-circular.png',
    Japan: 'https://img.icons8.com/fluency/48/japan-circular.png',
    Thailand: 'https://img.icons8.com/fluency/48/thailand-circular.png',
    'Isle of Man': 'https://img.icons8.com/color/48/isle-of-man-circular.png',
    Norway: 'https://img.icons8.com/color/48/norway-circular.png',
    'Iran (Persia)': 'https://img.icons8.com/color/48/iran-circular.png',
    Singapore: 'https://img.icons8.com/color/48/singapore-circular.png',
    Somalia: 'https://img.icons8.com/color/48/somalia-circular.png',
    Turkey: 'https://img.icons8.com/color/48/turkey-circular.png',
  };

    
  showScrollButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.showScrollButton = scrollTop > 300; // Muestra el botón después de 300px de scroll
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    if (scrollUpBtn) {
      scrollUpBtn.style.display = this.showScrollButton ? 'block' : 'none';
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
