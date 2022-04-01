import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { User } from '../auth.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;
  submitted!: boolean;
  errorMessage: string = '';

  constructor(
    public auth: AuthService, 
    private router: Router
    ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      username: new FormControl('', [Validators.minLength(6)])
    })
  }

  register() {
    if (this.form.invalid) {
      this.form.value.password.reset();
      return
    }

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      username: this.form.value.username
    }

    this.auth.register(user)
    .pipe(
      catchError((error) => {
        this.auth.logout();
        this.errorMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe( () => {
      this.form.reset();
      this.router.navigate(['login']);
      this.submitted = false;
    },
    () => {
      this.submitted = false
    })
   
  }
}
