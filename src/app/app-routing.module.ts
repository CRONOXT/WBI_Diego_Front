import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesListComponent } from "./components/shoes-list/shoes-list.component";

const routes: Routes = [
  {
    path:'shoes',
    component: ShoesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
