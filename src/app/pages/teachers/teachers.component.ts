import { Component, OnInit } from '@angular/core';
import { IHogwarts } from '../../common/models/ihogwarts.interface';
import { HogwartsService } from '../../common/services/hogwarts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  house: IHogwarts[] = [];
  casa: string;
  constructor(
    private hogwarts: HogwartsService,
    private route: ActivatedRoute
  ) {
    this.casa = this.route.snapshot.paramMap.get('casa');
    this.hogwarts.getStaff().subscribe((response) => {
      console.log(response);
      this.house = response;
    });
  }

  ngOnInit(): void {}
}
