import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckCyrillicValidator } from '../validators/checkCyrilic.validator';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
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
  percs: string[] = ['жизнерадостность', 'заинтересованность', 'интеллект'];
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = event.value.trim();

    // Add our fruit
    if (value.length > 0 && !this.percs.includes(value)) {
      this.percs.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(perc: string): void {
    const index = this.percs.indexOf(perc);

    if (index >= 0) {
      this.percs.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email]),
      surname: new FormControl('', [Validators.required, CheckCyrillicValidator.checkCyrillic]),
      firstname: new FormControl('', [Validators.required, CheckCyrillicValidator.checkCyrillic]),
      middlename: new FormControl('', [CheckCyrillicValidator.checkCyrillicForMiddleName]),
      percs: new FormControl('', [Validators.required])
    })
  }

  submit(event: any) {
    console.log(event)
    this.surname = event.path[0][0].value;
    this.firstname = event.path[0][1].value;
    this.middlename = event.path[0][2].value;
    this.email = event.path[0][3].value;
    // if (!this.percs.includes(event.path[0][4].value)) {
    //   this.percs.push(event.path[0][4].value);
    // }
  }

  clear() {
    this.form.reset()
  }

  // deletePerc(perc: string) {
  //   this.percs.splice(this.percs.findIndex(item => item === perc), 1)
  // }

}
