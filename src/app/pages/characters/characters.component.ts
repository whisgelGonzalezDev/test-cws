import { Component, OnInit } from '@angular/core';
import { HogwartsService } from '../../common/services/hogwarts.service';
import { ActivatedRoute } from '@angular/router';
import { IHogwarts } from '../../common/models/ihogwarts.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  house: IHogwarts[] = [];
  casa:string;
  constructor(
    private hogwarts: HogwartsService,
    private route: ActivatedRoute
  ) {
    this.casa = this.route.snapshot.paramMap.get("casa");
    console.log(this.casa);
    this.hogwarts.getCharacters(this.casa).subscribe(response => {
      console.log(response);
      this.house = response;
      this.addLocalStudent().forEach(element => {
        if (this.casa === element.house) {
          this.house.push(element)
        }
      });
      console.log(this.addLocalStudent());
    })
  }

  ngOnInit(): void {}

  addLocalStudent() {
    if(window.localStorage.getItem('students') !== null) {
      return JSON.parse(window.localStorage.getItem('students'));
    } else {
      return[]
    }

  }
}
