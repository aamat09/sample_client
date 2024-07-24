import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {DealerDashboardComponent} from "./components/marketplace/dealer-dashboard/dealer-dashboard.component";
import {CustomerDashboardComponent} from "./components/marketplace/customer-dashboard/customer-dashboard.component";
import {LoginComponent} from "./components/marketplace/login/login.component";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()
  ]
};
