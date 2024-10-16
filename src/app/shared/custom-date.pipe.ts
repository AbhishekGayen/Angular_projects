import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {
  transform(dateVal: string): string {
    const date = new Date(dateVal);
    console.log('date Object : ', date);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return date.toLocaleDateString('en-US', options);
  }

}
