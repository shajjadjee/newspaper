import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, catc: any): any {
    if(!value || !catc){
      return value
    }
  
    return value.filter(value => value.cname.indexOf(catc.cname) !== -1);
  }
  // transform1(value: any, ft: any): any {
  //   if(!value || !ft){
  //     return value
  //   }
  
  //   return value.filter(value => value.feature.indexOf(ft.feature) !== -1);
  // }

}
