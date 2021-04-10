import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})


export class AddStudentComponent implements OnInit {
  @Input() fG: FormGroup;
  constructor(private fb: FormBuilder, private local: LocalStorageService) {
    this.createForm();
    this.loadForm();
  }

  ngOnInit(): void {}

  get nameNoValid() {
    return (
      this.fG.get('name')?.invalid && this.fG.get('name')?.touched
    );
  }

  get lastNameNoValid() {
    return (
      this.fG.get('lastName')?.invalid &&
      this.fG.get('lastName')?.touched
    );
  }
  get ageNoValid() {
    return (
      this.fG.get('age')?.invalid && this.fG.get('age')?.touched
    );
  }

  createForm() {
    this.fG = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      patronus: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      yearOfBirth: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(4)],
      ],
      house: ['', Validators.required],
      image: ['']
    });
  }

  loadForm() {
    this.fG.reset({
      name: '',
      lastname: '',
      age: '',
      house: '',
      image: '../../../../../assets/image/hogwarts.png'
    });
  }

  saveForm() {
    if (this.fG.valid) {
      this.local.setLocalStorage(this.fG.value)
      this.fG.reset({});

    } else {
      console.log('FILL ALL FIELDS');
      return;
    }
  }
}
