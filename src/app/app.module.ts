import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './common/components/atoms/nav-menu/nav-menu.component';
import { HeaderComponent } from './common/components/atoms/header/header.component';
import { TableComponent } from './common/components/atoms/table/table.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentsComponent } from './pages/students/students.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { JwPaginationModule } from 'jw-angular-pagination';
// pipes

import { CalculateAgePipe } from './common/pipes/calculate-age.pipe';
import { AddStudentComponent } from './common/components/molecules/add-student/add-student.component';
import { CardComponent } from './common/components/molecules/card/card.component';
import { FormSstudentsComponent } from './pages/form-sstudents/form-sstudents.component';
import { FilterPipe } from './common/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
    TableComponent,
    HomeComponent,
    CharactersComponent,
    StudentsComponent,
    TeachersComponent,
    CalculateAgePipe,
    AddStudentComponent,
    CardComponent,
    FormSstudentsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
