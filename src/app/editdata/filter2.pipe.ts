import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter2'
})
export class FilterPipe2 implements PipeTransform {

  transform(fields, [attribute]) {
    return fields.filter(field => {
   //   console.log(attribute)
      return field[attribute] === "optional";
    });
  }
}