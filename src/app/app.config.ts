import { ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(), provideRouter(routes)] //Elimina la zona de detección de cambios para mejorar el rendimiento
};
