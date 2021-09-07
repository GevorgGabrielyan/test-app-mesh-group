import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

interface ErrorArgs {
    expectLength?: number;
    maxlength?: number;
    minlength?: number;
    min?: number;
    max?: number;
}


@Pipe({
    name: 'validationMessage'
})
export class ValidationMessagePipe implements PipeTransform {
    transform(errors: ValidationErrors, args: ErrorArgs = {}): string {
        if (errors) {
            const [errorKey] = Object.keys(errors);
            switch (errorKey) {
                case 'required':
                    return 'The field is required';
                case 'minlength':
                    return `The min length of the field is ${args.minlength} characters`;
                case 'maxlength':
                    return `Please fill out maximum ${args.maxlength} characters`;
                case 'min':
                    return `The field value cannot be less than ${args.max}`;
                case 'max':
                    return `The field value cannot be greater than ${args.min}`;
                default: return ''
            }
        } else {
          return ''
        }
    }
}
