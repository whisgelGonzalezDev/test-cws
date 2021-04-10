import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IHogwarts } from '../models/ihogwarts.interface';
import { URL_API } from '../static/config';

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  constructor(private http: HttpClient) { }
  getCharacters(casa: string): Observable<IHogwarts[]> {
		return this.http.get<IHogwarts[]>(`${URL_API}house/${casa}`);
	}

	getStaff(): Observable<IHogwarts[]> {
		return this.http.get<IHogwarts[]>(`${URL_API}staff/`);
	}

	getStudents(): Observable<IHogwarts[]> {
		return this.http.get<IHogwarts[]>(`${URL_API}students/`);
	}

}
