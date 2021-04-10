import { Component } from '@angular/core';
import { IHogwarts } from './common/models/ihogwarts.interface';
import { HogwartsService } from './common/services/hogwarts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  house: IHogwarts[] = [];
  casa: string;
  constructor(
    private hogwarts: HogwartsService,
    private route: ActivatedRoute
  ) {
    this.casa = this.route.snapshot.paramMap.get('casa');
    this.hogwarts.getStaff().subscribe((response) => {
      this.house = response;
    });
  }

}
