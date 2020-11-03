import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbankerComponent } from './bank/addbanker/addbanker.component';
import { DetailbankerComponent } from './bank/detailbanker/detailbanker.component';
import { ListbankersComponent } from './bank/listbankers/listbankers.component';


const routes: Routes = [
  { path: '', redirectTo: 'banks', pathMatch: 'full' },
  { path: 'addbanker', component: AddbankerComponent },
  { path: 'banks/:id', component: DetailbankerComponent },
  { path: 'banks', component: ListbankersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
