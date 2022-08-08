import { Pipe, PipeTransform } from '@angular/core';
import { Shoes } from 'src/app/interfaces/shoes';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Shoes[], page: number=0): Shoes[] {
    return value.slice(page,page+5);
  }

}
