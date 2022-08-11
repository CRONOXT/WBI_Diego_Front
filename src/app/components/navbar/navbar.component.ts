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
//BUSQUEDA ATRAVEZ DEL BACKEND
export class NavbarComponent implements OnInit {
  page: number=0;
  date: string = "2022-01-01";
  name!: string;
  filtro: string = 'NAME';
  shoes: Shoes[] = [];
  //SE INYECTA EL SERVICIO PARA PODER TOMAR SUS FUNCIONES                                                                         
  constructor(private comunication: HelperService, private search: ShoesService) {

  }

  ngOnInit(): void {
  }
  //ESTA FUNCION USA LOS DATOS DEVUELTOS POR LA API, QUE ORDENA LOS ZAPATOS
  //DE LOS ULTIMOS LANZADOS, A LOS MAS VIEJOS
  getDateAsc() {
    this.page=1;
    this.search.getShoesforDateAsc()
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        })
  }
  //ESTA FUNCION MANDA POR PARAMETRO UNA FECHA, PARA LUEGO CON EL USO DE LA API
  //BUSCAR SI HAY ALGUNO ZAPATO LANZADO EN ESA FECHA, ATRAVEZ DEL SERVICIO DE SHOES
  getDates(values: string) {
    this.page=1;
    this.search.getShoesfordate(values)
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        })
  }
  //ESTA FUNCION RECIBE POR PARAMETRO QUE FILTRO SE USARA EN LA BUSQUEDA, EJEMPLO
  //NAME, BRAND ETC, Y LLAMA AL SERVICIO DE SHOES CON LA FUNCION NECESARIA SEGUN
  //EL FILTRO DE BUSQUEDA OBTENIENDO ASI EL JSON Y GUARDANDOLO EN UNA VARIABLE QUE 
  //SE MANDA A OTRO COMPONENTE PARA MOSTRARLO
  getSearch(values: string, filtro: string) {  
    this.page=1;
    if (filtro === 'NAME') {
      this.search.getShoesforname(values.toLowerCase())
        .subscribe(
          res => {
            this.shoes = Object.values(res);
          })
    }
    else if (filtro === 'STORE') {
      this.search.getShoesforstore(values.toLowerCase())
        .subscribe(
          res => {
            this.shoes = Object.values(res);
          })
    }
    else if (filtro === 'MODEL') {
      this.search.getShoesformodel(values.toLowerCase())
        .subscribe(
          res => {
            this.shoes = Object.values(res);
          })
    }
    else if (filtro === 'BRAND') {
      this.search.getShoesforbrand(values.toLowerCase())
        .subscribe(
          res => {
            this.shoes = Object.values(res);
          })
    }
  }
}

