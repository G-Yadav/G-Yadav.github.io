import { ApplicationConfig, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { PdfExtractComponent } from './app/pdf/pdf-extract/pdf-extract.component';
import { ProfileComponent } from './app/profile/profile.component';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {path: 'pdf', component: PdfExtractComponent},
  {path: '', component: ProfileComponent}
];

const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  ]
}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
