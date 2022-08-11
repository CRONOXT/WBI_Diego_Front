import { Pipe, PipeTransform } from '@angular/core';
import { Shoes } from 'src/app/interfaces/shoes';
import { ShoesService } from 'src/app/services/shoes.service';

@Pipe({
  name: 'filtro'
})
//ESTA FUNCION SOLO FUE CREADA PARA MOSTRAR COMO SERIA LA BUSQUEDA ATRAVEZ DEL FRONT,
//NO ESTA IMPLEMENTADA DEBIDO A QUE GENERARIA COMFILICTOS
export class FiltroPipe implements PipeTransform {
  constructor(private shoeService: ShoesService) {

  }
  transform(value: Shoes[], search: string = '', filtro: string = ''): Shoes[] {

      return [];

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
