import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTableData',
})

/** 1= ASC,
 * -1= DESC
 *  0= original
 **/
export class SortTableDataPipe implements PipeTransform {
  transform(
    arrayObject: any[],
    field: string,
    order: number = 1,
    originalArr: any[]
  ): any[] {
    if (!order) {
      return originalArr;
    }
    const collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
    });
    arrayObject?.sort((val1, val2) => {
      const value1: any = val1[field] != null ? val1[field] : '';
      const value2: any = val2[field] != null ? val2[field] : '';
      let result: any;

      result = collator.compare(value1, value2);
      return order * result;
    });
    return arrayObject;
  }
}
