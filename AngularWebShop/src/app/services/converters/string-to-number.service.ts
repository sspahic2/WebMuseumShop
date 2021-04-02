import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringToNumberService {

  constructor() { }

  convertListStringToNumberList(stringList: string[]): number[] {

    let valid: number[] = [];
    stringList.forEach((element) => {
      
      let match = element.match(/[0-9]+/g);

      if(match != null) {
        match.forEach(numberMatch => {
          valid.push(parseInt(numberMatch));
        });
      }
    });

    return valid;
  }
}
