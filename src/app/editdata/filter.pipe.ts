import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
//    }

// transform(objects: any[]): any[] {
//   if(objects) {
//       return objects.filter(object => {
//           return object.data.type === 1;
//       });
//   }
// }

transform(fields, [attribute]) {
  return fields.filter(field => {
    console.log(attribute)
     // return field[attribute] === true; 
	     return field[attribute] === "mandatory"; 
  });
}
}