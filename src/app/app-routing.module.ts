import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DjangularComponent } from './djangular/djangular.component';

const routes: Routes = [
  {path:'', component:DjangularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
