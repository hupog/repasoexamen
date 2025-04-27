import { FormGroup } from "@angular/forms";

export const isRequired = (field: 'email' | 'password', formGroup: FormGroup) => {
  const control = formGroup.get(field);

  return control && control.touched && control.hasError('required');
};


export const isEmail = (field: 'email', formGroup: FormGroup) => {
  const control = formGroup.get(field);

  return control && control.touched && control.hasError('email');
};

