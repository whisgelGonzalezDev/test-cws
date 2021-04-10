import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentsComponent } from './pages/students/students.component';
import { FormSstudentsComponent } from './pages/form-sstudents/form-sstudents.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'characters/:casa', component: CharactersComponent },
	{ path: 'teachers', component: TeachersComponent },
	{ path: 'students', component: StudentsComponent },
  {path: 'add-students', component: FormSstudentsComponent },
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
