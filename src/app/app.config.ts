import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

export const appConfig = {
  providers: [
    provideRouter(routes)
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ]
};
