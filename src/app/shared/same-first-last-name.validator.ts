import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const sameFirstLastNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const firstName = control.get('firstName');
  const lastName = control.get('lastName');
  return firstName && lastName && firstName.value === lastName.value ? { sameFirstLastName: true } : null;
};
