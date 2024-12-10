import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { StandaloneComponentComponent } from './app/standalone-component/standalone-component.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(StandaloneComponentComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {provide:"baseUrl",useValue:"http://localhost:5097/api",multi:true}
  ]
});