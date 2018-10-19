import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter1'
})
export class FilterPipe1 implements PipeTransform {

  transform(fields, [attribute]) {
    return fields.filter(field => {
      console.log(attribute)
      return field[attribute] === "recommended";
    });
  }
}