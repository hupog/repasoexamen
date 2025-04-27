import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { isEmail, isRequired } from '../../utils/validators';
import { Router, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';

export interface SignInForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styles: ``
})
export default class SignInComponent {

    private _formBuilder = inject(FormBuilder);
    private _authService = inject(AuthService);
    private _router = inject(Router);
    
    isRequired(field: 'email' | 'password') {
      return isRequired(field, this.signUpForm);
    }
  
    isEmail(field: 'email') {
      return isEmail(field, this.signUpForm);
    }
  
    signUpForm = this._formBuilder.group<SignInForm>({
      email: this._formBuilder.control('', [Validators.required, Validators.email]),
      password: this._formBuilder.control('', [Validators.required, Validators.minLength(8)])
    });
  
    async onSubmit() {
      if (this.signUpForm.invalid) return;
  
      try {const { email, password } = this.signUpForm.value;
  
      if(!email || !password) return;
  
      console.log(email, password);
  
      await this._authService.signIn({ email, password });
  
      toast.success('Hola de nuevo, ' + email);
      this._router.navigateByUrl('/tasks');
    } catch (error) {
      toast.error('Error al crear el usuario');
    } 
    }
  }
