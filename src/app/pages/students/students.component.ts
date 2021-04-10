import { Component, OnInit } from '@angular/core';
import { IHogwarts } from '../../common/models/ihogwarts.interface';
import { HogwartsService } from '../../common/services/hogwarts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  house: IHogwarts[] = [];
  casa: string;
  constructor(private hogwarts: HogwartsService, private route: ActivatedRoute) {
    this.casa = this.route.snapshot.paramMap.get('casa');
    this.hogwarts.getStudents().subscribe((response) => {
			this.house = response;
		});
  }

  ngOnInit(): void {
  }

}
