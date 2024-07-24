import {Routes} from '@angular/router';
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {PdfUploadComponent} from "./components/pdf-upload/pdf-upload.component";
import {ProductListingComponent} from "./components/product-listing/product-listing.component";
import {LoginComponent} from "./components/marketplace/login/login.component";
import {CustomerDashboardComponent} from "./components/marketplace/customer-dashboard/customer-dashboard.component";
import {DealerDashboardComponent} from "./components/marketplace/dealer-dashboard/dealer-dashboard.component";

export const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {path: 'pdf', component: PdfUploadComponent},
  {path: 'scraping', component: ProductListingComponent},
  { path: 'marketplace', component: LoginComponent },
  { path: 'marketplace/customer-dashboard', component: CustomerDashboardComponent },
  { path: 'marketplace/dealer-dashboard', component: DealerDashboardComponent }
];
