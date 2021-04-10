import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../common/services/local-storage.service';
import { IHogwarts } from '../../common/models/ihogwarts.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sstudents',
  templateUrl: './form-sstudents.component.html',
  styleUrls: ['./form-sstudents.component.scss'],
})
export class FormSstudentsComponent implements OnInit {
  fG: FormGroup;
  students: IHogwarts[] = [];
  casas = ['Seleccione casa...','Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
  constructor(private fb: FormBuilder, private local: LocalStorageService) {
    this.createForm();
    this.loadForm();
    this.students = this.getLocalStudent();
  }

  ngOnInit(): void {}

  get nameNoValid() {
    return this.fG.get('name')?.invalid && this.fG.get('name')?.touched;
  }

  get lastNameNoValid() {
    return this.fG.get('lastName')?.invalid && this.fG.get('lastName')?.touched;
  }
  get ageNoValid() {
    return this.fG.get('age')?.invalid && this.fG.get('age')?.touched;
  }

  createForm() {
    this.fG = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      patronus: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      yearOfBirth: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(4)],
      ],
      house: ['', Validators.required],
      image: [''],
    });
  }

  loadForm() {
    this.fG.reset({
      name: '',
      patronus: '',
      yearOfBirth: '',
      house: '',
      image: '../../../../../assets/image/hogwarts.png',
    });
  }

  saveForm() {
    if (this.fG.valid) {
      this.local.setLocalStorage(this.fG.value);
      this.students = this.getLocalStudent();

    } else {
      console.log('FILL ALL FIELDS');
      return;
    }
  }
  getLocalStudent() {
    if (window.localStorage.getItem('students') !== null) {
      return JSON.parse(window.localStorage.getItem('students'));
    } else {
      return [];
    }
  }
}
