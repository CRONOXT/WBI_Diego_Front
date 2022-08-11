import { Component, Input, OnInit } from '@angular/core';
import { Shoes } from 'src/app/interfaces/shoes';
import { HelperService } from 'src/app/services/helper.service';
import { ShoesService } from "../../services/shoes.service";
@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent implements OnInit {
  //VARIABLES RECIBIDAS DEL COMPONENTE NATVAR
  @Input() shoes: Shoes[] = [];
  @Input() filtro: string = '';
  @Input() page: number = 0;
  @Input() name: string = '';
  constructor(private shoeService: ShoesService, private comunication: HelperService) { }

  ngOnInit(): void {
    this.getShoes();
  }
  //USA LA VARIABLE ENVIADA POR EL NATVAR PARA ASI MOSTRAR LOS ZAPATOS QUE SE SOLICITAN
  getShoes() {
    this.shoeService.getShoes()
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },
      )
  }

}
