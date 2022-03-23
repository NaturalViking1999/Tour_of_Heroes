import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fencecase'
})
export class FenceCasePipe implements PipeTransform {

  transform(value: string): string {
    let a: string[] = [];
    value.split('').forEach((element, index) =>  {
      if (index % 2 == 0){ 
        a.push(element.toUpperCase());
      }
      else { 
        a.push(element.toLowerCase());
      }
    });
    return value = a.join('');
  }

}
