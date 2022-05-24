import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RegExValidatorDirective implements Validator {
    regExValidationPattern: string;
    private pattern;
    private regexMap;
    validate(c: AbstractControl): ValidationErrors;
    static ɵfac: i0.ɵɵFactoryDeclaration<RegExValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RegExValidatorDirective, "[regExValidationPattern]", never, { "regExValidationPattern": "regExValidationPattern"; }, {}, never>;
}
