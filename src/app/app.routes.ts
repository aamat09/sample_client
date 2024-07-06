import {Routes} from '@angular/router';
import {ScheduleComponent} from "./schedule/schedule.component";
import {PdfUploadComponent} from "./pdf-upload/pdf-upload.component";

export const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {path: 'pdf', component: PdfUploadComponent},
];
