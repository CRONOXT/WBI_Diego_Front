import { Serializer } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Shoes } from 'src/app/interfaces/shoes';
import { HelperService } from 'src/app/services/helper.service';
import { ShoesService } from 'src/app/services/shoes.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  date: string="2022-01-01";
  name!: string;
  filtro:string='NAME';
  shoes: Shoes[]=[];
  //SE INYECTA EL SERVICIO PARA PODER TOMAR SUS FUNCIONES                                                                         
  constructor(private comunication: HelperService,private search: ShoesService) {

   }

  ngOnInit(): void {
  }
  getDateAsc(){
    this.search.getShoesforDateAsc()
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },)
  }

  getDates(values: string){
    this.search.getShoesfordate(values)
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },)
  }

  getSearch(values: string, filtro: string){  //BUSQUEDA ATRAVEZ DEL BACKEND
    
    if (filtro==='NAME') {
      this.search.getShoesforname(values.toLowerCase())
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },)
    }
    else if (filtro==='STORE'){
      this.search.getShoesforstore(values.toLowerCase())
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },)}
    else if (filtro==='MODEL'){
        this.search.getShoesformodel(values.toLowerCase())
        .subscribe(
          res => {
            this.shoes = Object.values(res);
          },)}
    else if (filtro==='BRAND'){
      this.search.getShoesforbrand(values.toLowerCase())
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },)}
    }  
 }

