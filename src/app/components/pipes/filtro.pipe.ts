import { Pipe, PipeTransform } from '@angular/core';
import { Shoes } from 'src/app/interfaces/shoes';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Shoes[], page: number=0, search: string=''): Shoes[] {
    if (search.length ===0)
    return value.slice(page,page+6);
    const filterName = value.filter(name=> name.name.includes(search));
    return filterName.slice(page,page+6);
  }

}
