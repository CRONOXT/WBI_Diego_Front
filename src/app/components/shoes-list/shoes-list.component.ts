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
  @Input() shoes: Shoes[] = [];
  @Input() filtro: string = '';
  page: number = 0;
  @Input() name: string = '';
  constructor(private shoeService: ShoesService, private comunication: HelperService) { }

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes() {

    this.shoeService.getShoes()
      .subscribe(
        res => {
          this.shoes = Object.values(res);
        },
      )
  }

  nextPage() {
    if (this.page < this.shoes.length - 6)
      this.page += 6;
  }

  prevPage() {
    if (this.page > 0)
      this.page -= 6;
  }
}
