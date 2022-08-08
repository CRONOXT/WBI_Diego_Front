import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoesListComponent } from './components/shoes-list/shoes-list.component';
import { ShoesFormComponent } from './components/shoes-form/shoes-form.component';
import { ObjtoArrayPipe } from './pipe';
import { FiltroPipe } from './components/pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoesListComponent,
    ShoesFormComponent,
    ObjtoArrayPipe,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
