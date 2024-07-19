import {Routes} from '@angular/router';
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {PdfUploadComponent} from "./components/pdf-upload/pdf-upload.component";
import {ProductListingComponent} from "./components/product-listing/product-listing.component";

export const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {path: 'pdf', component: PdfUploadComponent},
  {path: 'scraping', component: ProductListingComponent},
];
