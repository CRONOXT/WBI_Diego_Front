import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoesListComponent } from "./components/shoes-list/shoes-list.component";

const routes: Routes = [
  {
    path:'',
    component: NavbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
