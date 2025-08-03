import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PdfExtractComponent } from './pdf/pdf-extract/pdf-extract.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'pdf', component: PdfExtractComponent},
  {path: '', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
