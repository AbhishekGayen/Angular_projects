import {Component, Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'yesNo',
  standalone: true
})
export class YesNoPipe implements PipeTransform {
  transform(val: boolean): string {
    // if (val) {
    //   return 'Yes';
    // } else {
    //   return 'No';
    // }
    return val ? 'Yes' : 'No';
  }
}
