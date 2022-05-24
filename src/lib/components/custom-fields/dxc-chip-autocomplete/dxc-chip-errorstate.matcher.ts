/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class DxcChipErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = control.touched
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }