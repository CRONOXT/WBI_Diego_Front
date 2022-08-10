import { Pipe, PipeTransform } from '@angular/core';
import { Shoes } from 'src/app/interfaces/shoes';
import { ShoesService } from 'src/app/services/shoes.service';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  constructor(private shoeService: ShoesService) {

  }
  transform(value: Shoes[], page: number = 0, search: string = '', filtro: string = ''): Shoes[] {
    if (search.length === 0)
      return value.slice(page, page + 6);
    const filterName = value.filter(name => name.brand.name.includes(search));
    return filterName.slice(page, page + 6);
    //AQUI SE PUEDE VER COMO SERIA EL FILTRADO ATRAVEZ DEL FRONT, EL CUAL NO ESTA IMPLEMENTADO PARA EVITAR COMFICTOS    
    /*if (filtro==='BRAND'){ 
      const filterName = value.filter(name=> name.brand.name.includes(search));
      return filterName.slice(page,page+6);
    }
      if (filtro==='MODEL'){
        const filterName = value.filter(name=> name.model.name.includes(search));
        return filterName.slice(page,page+6);
    }
      if (filtro==='NAME'){
      const filterName = value.filter(name=> name.model.name.includes(search));
      return filterName.slice(page,page+6);
    }
    if (filtro==='STORE'){
      const filterName = value.filter(name=> name.store.values.name.includes(search));
      return filterName.slice(page,page+6);
    }*/
  }

}
