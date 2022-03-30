import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

    this.auth.login(user).subscribe( () => {
      this.form.reset();
      this.router.navigate(['/dashboard']);
      this.submitted = false;
    },
    () => {
      this.submitted = false
    })
   
  }
}
