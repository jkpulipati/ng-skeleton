import { Pipe, PipeTransform } from '@angular/core';

/**
 * pure  - primitive value - pipe - update - pipe
 * Impure
 */

@Pipe({
  name: 'secondLetterCapital',
  pure: false
})
export class SecondLetterCapitalPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    // return value.slice(0, 10) + '...';
    return value.filter(emp => emp.sal > 2000);
  }

}
