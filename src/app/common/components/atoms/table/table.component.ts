import { Component, Input, OnInit } from '@angular/core';
import { IHogwarts } from '../../../models/ihogwarts.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: IHogwarts[] = [];
  filterHouse = ''

  constructor() {}

  ngOnInit(): void {
  }

}
