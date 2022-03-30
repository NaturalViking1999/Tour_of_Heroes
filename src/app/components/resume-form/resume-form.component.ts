import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { CheckCyrillicValidator } from '../../validators/checkCyrilic.validator';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {
  form!: FormGroup;
  surname: string = '';
  firstname: string = '';
  middlename: string = '';
  email: string = '';
  readonly percs: string[] = ['жизнерадостность', 'заинтересованность', 'интеллект'];

  addOnBlur: boolean = true;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email]),
      surname: new FormControl('', [CheckCyrillicValidator.checkCyrillic]),
      firstname: new FormControl('', [CheckCyrillicValidator.checkCyrillic]),
      middlename: new FormControl('', [CheckCyrillicValidator.checkCyrillicForMiddleName]),
      percsArray: new FormArray(this.percs.map(el => new FormControl(el)))
    })
    // console.log(this.myPercs);
  }

  get myPercs() {
    return this.form.get('percsArray') as FormArray;
  }

  submit(event: any) {
    console.log(event)
    this.surname = event.path[0][0].value;
    this.firstname = event.path[0][1].value;
    this.middlename = event.path[0][2].value;
    this.email = event.path[0][3].value;
  }

  clear() {
    this.form.reset();
    this.myPercs.controls.splice(3);
    this.myPercs.patchValue(this.percs);
  }

  add(event: MatChipInputEvent): void {
    const eValue = event.value.trim();

    if (eValue.length > 0 && !this.myPercs.value.includes(eValue.toLowerCase())) {
      this.myPercs.push(new FormControl(eValue));
    }

    event.chipInput!.clear();
  }

  remove(i: number): void {
      this.myPercs.value.splice(i, 1);
  }

}
