import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HogwartsService } from '../../../services/hogwarts.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(private hogwarts:HogwartsService, private router: Router) { }

  clickCharacters(casa: string): void {
		void this.router.navigateByUrl(`characters/${casa}`);
	}

	clickTeachers(): void {
		void this.router.navigate(['teachers']);
	}

	clickStudents(): void {
		void this.router.navigate(['students']);
	}

	clickHome(): void {
		void this.router.navigate(['home']);
	}
  clickAddStudents() {
		void this.router.navigate(['add-students']);
  }
  ngOnInit(): void {
  }

}
