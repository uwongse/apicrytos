import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(crytos: any[], page: number = 0): any[] {

      return crytos.slice(page, page + 15);
  }

}
