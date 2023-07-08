import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat'
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(value: string): string {
    const digitsOnly = value.replace(/\D/g, '');
    const groups = digitsOnly.match(/.{1,4}/g);
    const formattedValue = groups ? groups.join(' - '):'';
    return formattedValue;
  }
}
