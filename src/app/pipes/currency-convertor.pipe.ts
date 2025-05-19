import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {
    console.log(args)
    let [data]=args;
      console.log(args)
    return value*85+ data
  }

}
