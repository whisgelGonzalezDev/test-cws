import { Injectable } from '@angular/core';
import { IHogwarts } from '../models/ihogwarts.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor() { }
  setLocalStorage( item:IHogwarts ){
    let arraystudents: IHogwarts[] = [];
      arraystudents.push(item)
      if (window.localStorage.getItem('students') !== null) {
        arraystudents = JSON.parse(window.localStorage.getItem('students'));
        arraystudents.push(item)
        localStorage.setItem('students', JSON.stringify(arraystudents));

      } else {
        localStorage.setItem('students', JSON.stringify(arraystudents));
      }
  }


}
