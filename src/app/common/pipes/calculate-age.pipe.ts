import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {
  year = new Date().getFullYear();

  transform(yearOfBirth: number): string {
    let age = '';
    if(yearOfBirth){
       age += this.year - yearOfBirth;
    }
    return age;
  }

}
