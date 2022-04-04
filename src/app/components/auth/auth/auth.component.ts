import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../auth.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form!: FormGroup;
  submitted!: boolean;
  errorMessage: string = '';
  sub!: Observable<any>;

  constructor(private auth: AuthService, private router: Router) {}

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
