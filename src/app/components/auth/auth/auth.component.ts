import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../auth.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  template: `
  <div style="display:flex; justify-content: center; margin: 30px 0 30px 0">
    <button class="btn" routerLink="/login" routerLinkActive="active">Login</button>
    <button class="btn" routerLink="/register" routerLinkActive="active">Register</button>
 </div>
  <div class="div-form-control">
    <h2>Login to your account</h2>
    <form [formGroup]="form" (ngSubmit)="authorize()">
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Email</mat-label>
            <input matInput type="text" placeholder="Add your email" formControlName="email">
        </mat-form-field>
        <div></div>
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label for="">Password</mat-label>
            <input matInput type="password" placeholder="Add your password" formControlName="password">
        </mat-form-field>
        <mat-error style="text-align: center; margin-bottom: 10px;" *ngIf="errorMessage">{{ errorMessage }}</mat-error>
        <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid || submitted">Login</button>
    </form>
</div>`,
  styles: [`
  form {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  
  .div-form-control {
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
  submitted!: boolean;
  errorMessage: string = '';
  sub!: Observable<any>;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })
  }

  authorize() {
    if (this.form.invalid) {
      this.form.value.password.reset();
      return
    }

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user)
    .pipe(
      catchError((error) => {
        this.auth.logout();
        this.errorMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe( () => {
      this.form.reset();
      this.router.navigate(['/dashboard']);
      this.submitted = false;
    },
    () => {
      this.submitted = false
    })
   
  }
}
