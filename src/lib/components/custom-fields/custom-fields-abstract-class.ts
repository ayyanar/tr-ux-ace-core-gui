/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

// import { Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export abstract class CustomFieldsAbstractClass implements ControlValueAccessor {
    public cValue: any = '';

    get value(): any {
        return this.cValue;
    }

    set value(item: any) {
      if (item !== this.cValue) {
        this.cValue = item;
        this.onChange(item);
      }
    }

    public writeValue(value) {
      this.cValue = value;
      this.onChange(value);
    }

    public onChange = (item) => {
        // console
    }

    public onTouched = () => {
           // console
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}
