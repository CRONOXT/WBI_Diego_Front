import { Component, OnInit } from '@angular/core';
import { Shoes } from 'src/app/interfaces/shoes';
import { ShoesService } from "../../services/shoes.service";
@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent implements OnInit {

  shoes:Shoes []=[];
  page:number=0;
  search: string='';
  constructor(private shoeService: ShoesService) { }

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes(){
    this.shoeService.getShoes()
    .subscribe(
      res => {
        this.shoes = Object.values(res);
        console.log(res);
        console.log(this.shoes.length)
      },
      
    )
  }
  onSearchName(value: string){
    this.page=0;
    this.search=value;
    
  }

  nextPage(){
    if(this.page<this.shoes.length-5)
    this.page += 5;
  }

  prevPage(){
    if(this.page>0)
      this.page -=5;
  }

}
