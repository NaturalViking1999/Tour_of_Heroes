import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  template: `
  <div>
    <h2>Create Account</h2>
    <p class="small">Create a free salmanwap account to access all content.</p>
    <form [formGroup]="form" (ngSubmit)="authorize()">
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Email</mat-label>
            <input matInput type="text" placeholder="Add your email" formControlName="email">
            <small></small>
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Username</mat-label>
            <input matInput type="text" placeholder="Add your username" formControlName="username">
            <small></small>
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label for="">Password</mat-label>
            <input matInput type="password" placeholder="Add your password" formControlName="password">
            <small></small>
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Create a free account</button>
    </form>
</div>`,
  styles: [`
  form {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  
  div {
    margin: 0 auto;
    width: 400px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(225, 240, 250, 1) 27%,
      rgba(206, 231, 247, 1) 44%,
      rgba(185, 220, 243, 1) 63%,
      rgba(167, 211, 240, 1) 85%,
      rgba(144, 200, 236, 1) 100%
    );
    border-radius: 20px;
    padding: 10px;
    box-shadow: 2px 2px 4px;
  }
  
  h2,
  .small {
    text-align: center;
  }
  .small {
    text-shadow: .6px 0 .6px #000, 0 .6px .6px #000, -.6px 0 .6px #000,
          0 -1px 1px #000;
  }
  .h2 {
    font-weight: bold
  }
  `]
})
export class AuthComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      username: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  authorize() {
    const formData = {...this.form.value}
    console.log(formData)
    window.location.href = 'http://localhost:4200/dashboard'
    alert(`Hello ${formData.username}`)
  }

}
