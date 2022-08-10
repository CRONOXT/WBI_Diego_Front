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
  name!: string;
  filtro:string='NAME';
  shoes: Shoes[]=[];
  //SE INYECTA EL SERVICIO PARA PODER TOMAR SUS FUNCIONES                                                                         
  constructor(private comunication: HelperService,private search: ShoesService) {

   }

  ngOnInit(): void {
  }

  getSearch(values: string, filtro: string){  //BUSQUEDA ATRAVEZ DEL BACKEND
    if (values===''){
      this.search.getShoes()
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },
        
      )
    }
    if (filtro==='NAME') {
      this.search.getShoesforname(values)
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },
        
      )}
    if (filtro==='STORE'){
      this.search.getShoesforstore(values)
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },
        
      )}
    if (filtro==='MODEL'){
        this.search.getShoesformodel(values)
        .subscribe(
          res => {
            this.shoes = Object.values(res);
          },     
    )}
    if (filtro==='BRAND'){
      this.search.getShoesforbrand(values)
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },
        
      )}
    }
    
  }

