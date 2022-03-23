import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CheckCyrillicValidator {
    
    static checkCyrillic(control: AbstractControl): ValidationErrors | null {
        if (/[а-я]/i.test(control.value) !== true) {
            return {value: true}
        }
        return null
    }

    static checkCyrillicForMiddleName(control: AbstractControl): ValidationErrors | null {
        if (control.value === '') {
            return null
        }
        else if (/[а-я]/i.test(control.value) !== true) {
            return {value: true}
        }
        return null
    }
}