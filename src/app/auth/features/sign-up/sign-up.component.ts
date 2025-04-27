import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { isRequired, isEmail } from '../../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
interface SignUpForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styles: ``
})
export default class SignUpComponent {

  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  
  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.signUpForm);
  }

  isEmail(field: 'email') {
    return isEmail(field, this.signUpForm);
  }

  signUpForm = this._formBuilder.group<SignUpForm>({
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.control('', [Validators.required, Validators.minLength(8)])
  });

  async onSubmit() {
    if (this.signUpForm.invalid) return;

    try {const { email, password } = this.signUpForm.value;

    if(!email || !password) return;

    console.log(email, password);

    await this._authService.signUp({ email, password });

    toast.success('Usuario creado correctamente');
  } catch (error) {
    toast.error('Error al crear el usuario');
  } 
  }
}
