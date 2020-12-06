import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class Userfilter implements PipeTransform {

  transform(value: any, uname: any): any {
    if(!value || !uname){
      return value
    }
  
    return value.filter(value => value.username.indexOf(uname.username) !== -1);
  }
  // transform1(value: any, ft: any): any {
  //   if(!value || !ft){
  //     return value
  //   }
  
  //   return value.filter(value => value.feature.indexOf(ft.feature) !== -1);
  // }

}
