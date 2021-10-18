import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
},
{path: 'search/:game-search',
component: HomeComponent,},
{
  path: '',
  component: DataTableComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
