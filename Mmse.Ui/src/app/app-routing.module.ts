import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPersonComponent } from './components/search-person/search-person.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SearchPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
