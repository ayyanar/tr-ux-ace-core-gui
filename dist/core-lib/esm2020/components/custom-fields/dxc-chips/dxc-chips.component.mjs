/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Component, forwardRef, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayConfig } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/flex-layout/flex";
import * as i8 from "@angular/common";
import * as i9 from "@angular/material/input";
import * as i10 from "../../../directives/regex-validator-directive";
import * as i11 from "@angular/cdk/portal";
const COMMA = 188;
const ENTER = 13;
// tslint:disable:no-forward-ref
export class DxcChipsComponent {
    constructor(overlay) {
        this.overlay = overlay;
        this.isValid = true;
        this.inputPattern = '';
        this.forSave = new EventEmitter(); // to be removed
        // @HostListener('document:keydown', ['$event'])
        // onEscapePress(event: KeyboardEvent) {
        //     if (event.keyCode === 27) {
        //         this.closeAddCondition();
        //     }
        // }
        // public visible: boolean = true;
        this.chipListCtrl = new FormControl();
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.isShowMoreVisible = false;
        this.startIndex = 0;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.selectedChips = [];
        this.showChips = [];
        this.isDisabled = false;
        this.isPasted = false;
        this.pasteText = '';
        // tslint:disable:no-empty
        this.propagateChange = () => { };
    }
    ngOnInit() {
        this.ForEditControl(this.forEdit);
        this.placeholder = this.placeholder || '';
        this.inputValidationFormat = this.inputValidationFormat || '';
        this.maxChipsAllow = this.maxChipsAllow ? this.maxChipsAllow : 4;
        this.maxChipsShow = this.maxChipsAllow ? this.maxChipsAllow : 0;
    }
    writeValue(obj) {
        this.selectedChips = [];
        this.showChips = this.setShowChips(this.selectedChips);
        if (this.chipInput) {
            this.chipInput.nativeElement.value = '';
        }
        // console.log((this.chipInput.nativeElement as MatInput).empty);
        this.ForEditControl(obj);
        this.placeholder = this.placeholder || '';
        this.inputValidationFormat = this.inputValidationFormat || '';
        // this.chipListCtrl.setValue('');
        // this.chipListCtrl.reset();
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) { }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (isDisabled) {
            this.chipListCtrl.disable();
        }
        else {
            this.chipListCtrl.enable();
        }
    }
    onPaste(event) {
        if (!this.isDisabled) {
            const regexp = new RegExp(this.inputPattern);
            const pastedItems = event.clipboardData
                .getData('Text')
                .split(/[.]|[,]|[\s]|[\r]|[\n]/)
                .filter((value) => value.trim() !== '');
            let i = 0;
            for (const item of pastedItems) {
                if (this.selectedChips.filter((obj) => obj.value === item).length === 0) {
                    this.selectedChips.push({
                        value: item,
                        valid: regexp.test(item)
                    });
                    i++;
                }
                if (this.selectedChips.length >= this.maxChipsAllow) {
                    this.pasteText = i + ' of ' + pastedItems.length + ' items pasted. Max count reached';
                    console.log(this.pasteText);
                    break;
                }
            }
            this.isPasted = true;
            if (this.pasteText === '') {
                this.pasteText = i + ' of ' + pastedItems.length + ' items pasted.';
            }
            setTimeout(() => {
                this.isPasted = false;
                this.pasteText = '';
            }, 3000);
            this.showChips = this.setShowChips(this.selectedChips);
            this.returnData(this.selectedChips);
        }
        event.preventDefault();
    }
    add(event) {
        const regexp = new RegExp(this.inputPattern);
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            if (this.selectedChips.filter((s) => s.value === value).length <= 0) {
                this.selectedChips.push({
                    value: value.trim(),
                    valid: regexp.test(value.trim())
                });
            }
            // this.selectedChips.push(value.trim());
            // console.log('selectedChips:' + this.selectedChips);
            this.showChips = this.setShowChips(this.selectedChips);
            // input.focus();
            this.chipInput.nativeElement.focus();
            // console.log("focus");
        }
        if (input) {
            input.value = '';
        }
        this.returnData(this.selectedChips);
        this.forSave.emit(this.selectedChips);
    }
    setShowChips(chips) {
        if (this.maxChipsShow === 0) {
            return chips;
        }
        this.startIndex =
            chips.length > this.maxChipsShow ? chips.length - this.maxChipsShow : 0;
        this.isShowMoreVisible = this.startIndex > 0 ? true : false;
        // console.log('startIndex:' + this.startIndex + '||endIndex:' + chips.length);
        // console.log('selectedChips:' + this.selectedChips);
        return chips.slice(this.startIndex);
    }
    remove(chip, index, deleteType) {
        console.log("dxc chips remove call");
        // const index = this.selectedChips.indexOf(chip);
        if (!this.isDisabled) {
            if (deleteType === 'idel') {
                index = this.startIndex + index;
            }
            if (index >= 0) {
                this.selectedChips.splice(index, 1);
                // console.log('selectedChips:' + this.selectedChips);
                this.showChips = this.setShowChips(this.selectedChips);
                if (deleteType === 'idel') {
                    this.chipInput.nativeElement.focus();
                }
            }
            if (this.selectedChips.length === 0) {
                this.closeAllChips();
            }
            this.returnData(this.selectedChips);
            this.forSave.emit(this.selectedChips);
        }
    }
    returnData(value) {
        const output = [];
        for (const item of value) {
            output.push(item.value);
        }
        this.propagateChange(output);
    }
    ForEditControl(value) {
        const regexp = new RegExp(this.inputPattern);
        if (value &&
            value !== null &&
            value.length >= 1 &&
            (this.selectedChips === undefined || this.selectedChips.length < 1)) {
            for (const item of value) {
                this.selectedChips.push({
                    value: item.trim(),
                    valid: regexp.test(item.trim())
                });
                if (this.selectedChips.length >= this.maxChipsAllow) {
                    break;
                }
            }
            // this.selectedChips = value.length > this.maxChipsAllow ?  value.slice(0, this.maxChipsAllow) : value;
            this.showChips = this.setShowChips(this.selectedChips);
        }
    }
    showAllChips() {
        // console.log(this.chipParent.nativeElement);
        /*const strategy = this.overlay
            .position()
            .connectedTo(
                this.addConditionOrigin.elementRef,
                { originX: 'end', originY: 'bottom' },
                { overlayX: 'end', overlayY: 'top' }
            );*/
        /*const strategy = this.overlay.position()
        .flexibleConnectedTo(this.addConditionOrigin.elementRef)
        .withPositions([{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
        }, {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
        }]);*/
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this.addConditionOrigin.elementRef)
            .withPositions([{
                originX: 'end',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
            }, {
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
            }]);
        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            positionStrategy: strategy,
            width: this.chipParent.nativeElement.getBoundingClientRect().width
        });
        this.overlayRef = this.overlay.create(config);
        this.overlayRef.attach(this.addConditionTemplate);
        this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
        this.overlayRef.keydownEvents().subscribe((event) => {
            if (event.keyCode === 27) {
                // this.overlayRef.detach();
                this.closeAllChips();
            }
        });
    }
    closeAllChips() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.chipInput.nativeElement.focus();
        }
    }
}
DxcChipsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipsComponent, deps: [{ token: i1.Overlay }], target: i0.ɵɵFactoryTarget.Component });
DxcChipsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcChipsComponent, selector: "dxc-chips", inputs: { forEdit: "forEdit", placeholder: "placeholder", inputValidationFormat: "inputValidationFormat", maxChipsAllow: "maxChipsAllow", maxChipsShow: "maxChipsShow", isValid: "isValid", inputPattern: "inputPattern" }, outputs: { forSave: "forSave" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DxcChipsComponent),
            multi: true
        }
    ], viewQueries: [{ propertyName: "addConditionOrigin", first: true, predicate: ["addConditionOrigin"], descendants: true }, { propertyName: "addConditionTemplate", first: true, predicate: ["addConditionTemplate"], descendants: true }, { propertyName: "chipParent", first: true, predicate: ["chipparent"], descendants: true, read: ElementRef }, { propertyName: "chipInput", first: true, predicate: ["chipinput"], descendants: true }], ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<form class=\"dxc-chips\" >\n    <mat-form-field [class.mat-chip-form-field-invalid]=\"!isValid && !isDisabled\" [class.dxc-chips-disabled]=\"isDisabled\" fxFlex=\"100%\" [floatLabel]=\"'auto'\" #chipparent>\n        <mat-label>{{placeholder}}</mat-label>\n        <mat-chip-list #chipList>\n            <mat-chip *ngFor=\"let chip of showChips;let i = index\" class=\" mat-standard-chip mat-chip-selected\" [selectable]=\"selectable\" [color]=\"chip.valid ? 'normal':'warn'\" [removable]=\"removable\" (removed)=\"remove(chip,i,'idel')\">\n                {{chip.value}}\n                <mat-icon matChipRemove *ngIf=\"removable && !isDisabled\">cancel</mat-icon>              \n            </mat-chip>\n            \n            <input #chipinput matInput regExValidationPattern=\"{{inputValidationFormat}}\" [style.display]=\"selectedChips.length >= maxChipsAllow ? 'none' : 'block' \"\n                [matChipInputFor]=\"chipList\" [formControl]=\"chipListCtrl\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" (paste)=\"onPaste($event)\" />\n        </mat-chip-list>\n\n        <button cdk-overlay-origin #addConditionOrigin=\"cdkOverlayOrigin\" [style.display]=\"isShowMoreVisible?'block':'none'\" matSuffix\n            mat-icon-button color=\"primary\" (click)=\"showAllChips()\">\n            <mat-icon aria-label=\"show all\">more_horiz</mat-icon>\n        </button>\n        \n        <ng-template cdk-portal #addConditionTemplate=\"cdkPortal\">\n            <div class=\"dxc-chips mat-elevation-z8 dxc-more-chips\">\n                <mat-chip-list>\n                    <mat-chip *ngFor=\"let chip of selectedChips;let i = index\" class=\" mat-standard-chip mat-chip-selected\" [color]=\"chip.valid ? 'normal':'warn'\" [selectable]=\"false\" [removable]=\"removable\" (removed)=\"remove(chip,i,'alldel')\">\n                        {{chip.value}}\n                        <mat-icon matChipRemove *ngIf=\"removable && !isDisabled\">cancel</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n            </div>\n        </ng-template>\n        <mat-hint *ngIf=\"isPasted\">{{pasteText}}</mat-hint>\n        <mat-hint *ngIf=\"maxChipsAllow > 0\" align=\"end\">{{selectedChips.length}}/{{maxChipsAllow}}</mat-hint>\n        <div *ngIf=\"!isValid && !isPasted &&!isDisabled\" class=\"mat-form-field-subscript-wrapper \" >\n            <ng-content select=\"mat-error\"></ng-content>\n        </div>\n    </mat-form-field>\n</form>", styles: ["@charset \"UTF-8\";.dxc-chips .mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:2px 4px 0 0}.dxc-chips .mat-chip:not(.mat-basic-chip){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:inline-flex;padding:1px 8px;border-radius:24px;align-items:center;cursor:default;margin-top:2px;margin-right:4px}.dxc-chips .mat-form-field-subscript-wrapper{margin-top:26px}.dxc-more-chips{border-radius:2px;margin-top:-2em;padding:8px;background-color:#fff;max-height:200px;overflow-y:auto}.dxc-chips-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.dxc-chips-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0%,rgba(0,0,0,.42) 33%,transparent 0%);background-size:4px 1px;background-repeat:repeat-x}\n"], components: [{ type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i3.MatChipList, selector: "mat-chip-list", inputs: ["errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i6.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i6.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i6.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i7.DefaultFlexDirective, selector: "  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],  [fxFlex.gt-md], [fxFlex.gt-lg]", inputs: ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"] }, { type: i2.MatLabel, selector: "mat-label" }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.MatChipRemove, selector: "[matChipRemove]" }, { type: i9.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i3.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i10.RegExValidatorDirective, selector: "[regExValidationPattern]", inputs: ["regExValidationPattern"] }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { type: i2.MatSuffix, selector: "[matSuffix]" }, { type: i11.TemplatePortalDirective, selector: "[cdk-portal], [portal]", exportAs: ["cdkPortal"] }, { type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-chips', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DxcChipsComponent),
                            multi: true
                        }
                    ], template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<form class=\"dxc-chips\" >\n    <mat-form-field [class.mat-chip-form-field-invalid]=\"!isValid && !isDisabled\" [class.dxc-chips-disabled]=\"isDisabled\" fxFlex=\"100%\" [floatLabel]=\"'auto'\" #chipparent>\n        <mat-label>{{placeholder}}</mat-label>\n        <mat-chip-list #chipList>\n            <mat-chip *ngFor=\"let chip of showChips;let i = index\" class=\" mat-standard-chip mat-chip-selected\" [selectable]=\"selectable\" [color]=\"chip.valid ? 'normal':'warn'\" [removable]=\"removable\" (removed)=\"remove(chip,i,'idel')\">\n                {{chip.value}}\n                <mat-icon matChipRemove *ngIf=\"removable && !isDisabled\">cancel</mat-icon>              \n            </mat-chip>\n            \n            <input #chipinput matInput regExValidationPattern=\"{{inputValidationFormat}}\" [style.display]=\"selectedChips.length >= maxChipsAllow ? 'none' : 'block' \"\n                [matChipInputFor]=\"chipList\" [formControl]=\"chipListCtrl\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" (paste)=\"onPaste($event)\" />\n        </mat-chip-list>\n\n        <button cdk-overlay-origin #addConditionOrigin=\"cdkOverlayOrigin\" [style.display]=\"isShowMoreVisible?'block':'none'\" matSuffix\n            mat-icon-button color=\"primary\" (click)=\"showAllChips()\">\n            <mat-icon aria-label=\"show all\">more_horiz</mat-icon>\n        </button>\n        \n        <ng-template cdk-portal #addConditionTemplate=\"cdkPortal\">\n            <div class=\"dxc-chips mat-elevation-z8 dxc-more-chips\">\n                <mat-chip-list>\n                    <mat-chip *ngFor=\"let chip of selectedChips;let i = index\" class=\" mat-standard-chip mat-chip-selected\" [color]=\"chip.valid ? 'normal':'warn'\" [selectable]=\"false\" [removable]=\"removable\" (removed)=\"remove(chip,i,'alldel')\">\n                        {{chip.value}}\n                        <mat-icon matChipRemove *ngIf=\"removable && !isDisabled\">cancel</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n            </div>\n        </ng-template>\n        <mat-hint *ngIf=\"isPasted\">{{pasteText}}</mat-hint>\n        <mat-hint *ngIf=\"maxChipsAllow > 0\" align=\"end\">{{selectedChips.length}}/{{maxChipsAllow}}</mat-hint>\n        <div *ngIf=\"!isValid && !isPasted &&!isDisabled\" class=\"mat-form-field-subscript-wrapper \" >\n            <ng-content select=\"mat-error\"></ng-content>\n        </div>\n    </mat-form-field>\n</form>", styles: ["@charset \"UTF-8\";.dxc-chips .mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:2px 4px 0 0}.dxc-chips .mat-chip:not(.mat-basic-chip){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:inline-flex;padding:1px 8px;border-radius:24px;align-items:center;cursor:default;margin-top:2px;margin-right:4px}.dxc-chips .mat-form-field-subscript-wrapper{margin-top:26px}.dxc-more-chips{border-radius:2px;margin-top:-2em;padding:8px;background-color:#fff;max-height:200px;overflow-y:auto}.dxc-chips-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.dxc-chips-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0%,rgba(0,0,0,.42) 33%,transparent 0%);background-size:4px 1px;background-repeat:repeat-x}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }]; }, propDecorators: { forEdit: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], inputValidationFormat: [{
                type: Input
            }], maxChipsAllow: [{
                type: Input
            }], maxChipsShow: [{
                type: Input
            }], isValid: [{
                type: Input
            }], inputPattern: [{
                type: Input
            }], forSave: [{
                type: Output
            }], addConditionOrigin: [{
                type: ViewChild,
                args: ['addConditionOrigin']
            }], addConditionTemplate: [{
                type: ViewChild,
                args: ['addConditionTemplate']
            }], chipParent: [{
                type: ViewChild,
                args: ['chipparent', { read: ElementRef }]
            }], chipInput: [{
                type: ViewChild,
                args: ['chipinput']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHhjLWNoaXBzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jdXN0b20tZmllbGRzL2R4Yy1jaGlwcy9keGMtY2hpcHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2N1c3RvbS1maWVsZHMvZHhjLWNoaXBzL2R4Yy1jaGlwcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNILFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFHTixZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0gsV0FBVyxFQUVYLGlCQUFpQixFQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBS3hCLE9BQU8sRUFFSCxhQUFhLEVBR2hCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFHOUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNqQixnQ0FBZ0M7QUFhaEMsTUFBTSxPQUFPLGlCQUFpQjtJQTRDMUIsWUFBMEIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQXBDMUIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixpQkFBWSxHQUFvQixFQUFFLENBQUM7UUFFbEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0I7UUFFL0QsZ0RBQWdEO1FBQ2hELHdDQUF3QztRQUN4QyxrQ0FBa0M7UUFDbEMsb0NBQW9DO1FBQ3BDLFFBQVE7UUFDUixJQUFJO1FBRUosa0NBQWtDO1FBQzNCLGlCQUFZLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixjQUFT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c0JBQTFELFNBQVM7dUJBQUMsb0JBQW9CO2dCQUV2QixvQkFBb0I7c0JBRDNCLFNBQVM7dUJBQUMsc0JBQXNCO2dCQUd6QixVQUFVO3NCQURqQixTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0JBRWIsU0FBUztzQkFBeEMsU0FBUzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFVucHVibGlzaGVkIHdvcmsgwqkgMjAxOSBEWEMgVGVjaG5vbG9neSBDb21wYW55LlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbiAqL1xuXG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgZm9yd2FyZFJlZixcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIFZpZXdDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgRm9ybUNvbnRyb2wsXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgTkdfVkFMVUVfQUNDRVNTT1Jcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gaW1wb3J0IHsgQ3VzdG9tRmllbGRzQWJzdHJhY3RDbGFzcyB9IGZyb20gJy4uL2N1c3RvbS1maWVsZHMtYWJzdHJhY3QtY2xhc3MnO1xuaW1wb3J0IHsgTWF0Q2hpcElucHV0RXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9pMThuL2kxOG5fYXN0JztcbmltcG9ydCB7IENka1BvcnRhbCwgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gICAgT3ZlcmxheSxcbiAgICBPdmVybGF5Q29uZmlnLFxuICAgIE92ZXJsYXlSZWYsXG4gICAgQ2RrT3ZlcmxheU9yaWdpblxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IENPTU1BID0gMTg4O1xuY29uc3QgRU5URVIgPSAxMztcbi8vIHRzbGludDpkaXNhYmxlOm5vLWZvcndhcmQtcmVmXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2R4Yy1jaGlwcycsXG4gICAgdGVtcGxhdGVVcmw6ICdkeGMtY2hpcHMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydkeGMtY2hpcHMuY29tcG9uZW50LnNjc3MnXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEeGNDaGlwc0NvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEeGNDaGlwc0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmb3JFZGl0OiBhbnk7IC8vIHRvIGJlIHJlbW92ZWRcbiAgICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5wdXRWYWxpZGF0aW9uRm9ybWF0OiBzdHJpbmc7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4Q2hpcHNBbGxvdzogbnVtYmVyO1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heENoaXBzU2hvdzogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5wdXRQYXR0ZXJuOiBzdHJpbmcgfCBSZWdFeHAgPSAnJztcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZm9yU2F2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdG8gYmUgcmVtb3ZlZFxuXG4gICAgLy8gQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgLy8gb25Fc2NhcGVQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuY2xvc2VBZGRDb25kaXRpb24oKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgY2hpcExpc3RDdHJsOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgIHB1YmxpYyBzZWxlY3RhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgcmVtb3ZhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgYWRkT25CbHVyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgaXNTaG93TW9yZVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgc3RhcnRJbmRleDogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BXTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRDaGlwcyA9IFtdO1xuICAgIHB1YmxpYyBzaG93Q2hpcHMgPSBbXTtcbiAgICBwdWJsaWMgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGlzUGFzdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHBhc3RlVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBAVmlld0NoaWxkKCdhZGRDb25kaXRpb25PcmlnaW4nKSBwcml2YXRlIGFkZENvbmRpdGlvbk9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgICBAVmlld0NoaWxkKCdhZGRDb25kaXRpb25UZW1wbGF0ZScpXG4gICAgcHJpdmF0ZSBhZGRDb25kaXRpb25UZW1wbGF0ZTogQ2RrUG9ydGFsO1xuICAgIEBWaWV3Q2hpbGQoJ2NoaXBwYXJlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgICBwcml2YXRlIGNoaXBQYXJlbnQ6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnY2hpcGlucHV0JykgcHJpdmF0ZSBjaGlwSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIG92ZXJsYXk6IE92ZXJsYXkpIHsgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tZW1wdHlcbiAgICBwdWJsaWMgcHJvcGFnYXRlQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuRm9yRWRpdENvbnRyb2wodGhpcy5mb3JFZGl0KTtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgJyc7XG4gICAgICAgIHRoaXMuaW5wdXRWYWxpZGF0aW9uRm9ybWF0ID0gdGhpcy5pbnB1dFZhbGlkYXRpb25Gb3JtYXQgfHwgJyc7XG4gICAgICAgIHRoaXMubWF4Q2hpcHNBbGxvdyAgPSB0aGlzLm1heENoaXBzQWxsb3cgPyB0aGlzLm1heENoaXBzQWxsb3cgOiA0O1xuICAgICAgICB0aGlzLm1heENoaXBzU2hvdyA9ICB0aGlzLm1heENoaXBzQWxsb3cgPyB0aGlzLm1heENoaXBzQWxsb3cgOiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKG9iaik6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5zaG93Q2hpcHMgPSB0aGlzLnNldFNob3dDaGlwcyh0aGlzLnNlbGVjdGVkQ2hpcHMpO1xuICAgICAgICBpZiAodGhpcy5jaGlwSW5wdXQpIHtcbiAgICAgICAgICAgICh0aGlzLmNoaXBJbnB1dC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XG4gICAgICAgIH0gICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coKHRoaXMuY2hpcElucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgTWF0SW5wdXQpLmVtcHR5KTtcbiAgICAgICAgdGhpcy5Gb3JFZGl0Q29udHJvbChvYmopO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICAgICAgdGhpcy5pbnB1dFZhbGlkYXRpb25Gb3JtYXQgPSB0aGlzLmlucHV0VmFsaWRhdGlvbkZvcm1hdCB8fCAnJztcbiAgICAgICAgLy8gdGhpcy5jaGlwTGlzdEN0cmwuc2V0VmFsdWUoJycpO1xuICAgICAgICAvLyB0aGlzLmNoaXBMaXN0Q3RybC5yZXNldCgpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gICAgfVxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNoaXBMaXN0Q3RybC5kaXNhYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoaXBMaXN0Q3RybC5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBhc3RlKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCh0aGlzLmlucHV0UGF0dGVybik7XG4gICAgICAgICAgICBjb25zdCBwYXN0ZWRJdGVtcyA9IGV2ZW50LmNsaXBib2FyZERhdGFcbiAgICAgICAgICAgICAgICAuZ2V0RGF0YSgnVGV4dCcpXG4gICAgICAgICAgICAgICAgLnNwbGl0KC9bLl18WyxdfFtcXHNdfFtcXHJdfFtcXG5dLylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSAnJyk7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcGFzdGVkSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENoaXBzLmZpbHRlcigob2JqKSA9PiBvYmoudmFsdWUgPT09IGl0ZW0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkOiByZWdleHAudGVzdChpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENoaXBzLmxlbmd0aCA+PSB0aGlzLm1heENoaXBzQWxsb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXN0ZVRleHQgPSBpICsgJyBvZiAnICsgcGFzdGVkSXRlbXMubGVuZ3RoICsgJyBpdGVtcyBwYXN0ZWQuIE1heCBjb3VudCByZWFjaGVkJztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXN0ZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzUGFzdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3RlVGV4dCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3RlVGV4dCA9IGkgKyAnIG9mICcgKyBwYXN0ZWRJdGVtcy5sZW5ndGggKyAnIGl0ZW1zIHBhc3RlZC4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Bhc3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFzdGVUZXh0ID0gJyc7XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NoaXBzID0gdGhpcy5zZXRTaG93Q2hpcHModGhpcy5zZWxlY3RlZENoaXBzKTtcbiAgICAgICAgICAgIHRoaXMucmV0dXJuRGF0YSh0aGlzLnNlbGVjdGVkQ2hpcHMpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCh0aGlzLmlucHV0UGF0dGVybik7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XG4gICAgICAgIGlmICgodmFsdWUgfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDaGlwcy5maWx0ZXIoKHMpID0+IHMudmFsdWUgPT09IHZhbHVlKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQ6IHJlZ2V4cC50ZXN0KHZhbHVlLnRyaW0oKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRDaGlwcy5wdXNoKHZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0ZWRDaGlwczonICsgdGhpcy5zZWxlY3RlZENoaXBzKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NoaXBzID0gdGhpcy5zZXRTaG93Q2hpcHModGhpcy5zZWxlY3RlZENoaXBzKTtcbiAgICAgICAgICAgIC8vIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAodGhpcy5jaGlwSW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5mb2N1cygpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmb2N1c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXR1cm5EYXRhKHRoaXMuc2VsZWN0ZWRDaGlwcyk7XG4gICAgICAgIHRoaXMuZm9yU2F2ZS5lbWl0KHRoaXMuc2VsZWN0ZWRDaGlwcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNob3dDaGlwcyhjaGlwczogYW55W10pOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5tYXhDaGlwc1Nob3cgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlwcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPVxuICAgICAgICAgICAgY2hpcHMubGVuZ3RoID4gdGhpcy5tYXhDaGlwc1Nob3cgPyBjaGlwcy5sZW5ndGggLSB0aGlzLm1heENoaXBzU2hvdyA6IDA7XG4gICAgICAgIHRoaXMuaXNTaG93TW9yZVZpc2libGUgPSB0aGlzLnN0YXJ0SW5kZXggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhcnRJbmRleDonICsgdGhpcy5zdGFydEluZGV4ICsgJ3x8ZW5kSW5kZXg6JyArIGNoaXBzLmxlbmd0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RlZENoaXBzOicgKyB0aGlzLnNlbGVjdGVkQ2hpcHMpO1xuICAgICAgICByZXR1cm4gY2hpcHMuc2xpY2UodGhpcy5zdGFydEluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKGNoaXA6IGFueSwgaW5kZXg6IG51bWJlciwgZGVsZXRlVHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHhjIGNoaXBzIHJlbW92ZSBjYWxsXCIpO1xuICAgICAgICAvLyBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRDaGlwcy5pbmRleE9mKGNoaXApO1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKGRlbGV0ZVR5cGUgPT09ICdpZGVsJykge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5zdGFydEluZGV4ICsgaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RlZENoaXBzOicgKyB0aGlzLnNlbGVjdGVkQ2hpcHMpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2hpcHMgPSB0aGlzLnNldFNob3dDaGlwcyh0aGlzLnNlbGVjdGVkQ2hpcHMpO1xuICAgICAgICAgICAgICAgIGlmIChkZWxldGVUeXBlID09PSAnaWRlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2hpcElucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENoaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxDaGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXR1cm5EYXRhKHRoaXMuc2VsZWN0ZWRDaGlwcyk7XG4gICAgICAgICAgICB0aGlzLmZvclNhdmUuZW1pdCh0aGlzLnNlbGVjdGVkQ2hpcHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJldHVybkRhdGEodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKGl0ZW0udmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKG91dHB1dCk7XG4gICAgfVxuXG4gICAgcHVibGljIEZvckVkaXRDb250cm9sKHZhbHVlOiBhbnlbXSkge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHRoaXMuaW5wdXRQYXR0ZXJuKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdmFsdWUgJiZcbiAgICAgICAgICAgIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICB2YWx1ZS5sZW5ndGggPj0gMSAmJlxuICAgICAgICAgICAgKHRoaXMuc2VsZWN0ZWRDaGlwcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuc2VsZWN0ZWRDaGlwcy5sZW5ndGggPCAxKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0udHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZDogcmVnZXhwLnRlc3QoaXRlbS50cmltKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDaGlwcy5sZW5ndGggPj0gdGhpcy5tYXhDaGlwc0FsbG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRDaGlwcyA9IHZhbHVlLmxlbmd0aCA+IHRoaXMubWF4Q2hpcHNBbGxvdyA/ICB2YWx1ZS5zbGljZSgwLCB0aGlzLm1heENoaXBzQWxsb3cpIDogdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNob3dDaGlwcyA9IHRoaXMuc2V0U2hvd0NoaXBzKHRoaXMuc2VsZWN0ZWRDaGlwcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0FsbENoaXBzKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNoaXBQYXJlbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIC8qY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgICAgICAgIC5wb3NpdGlvbigpXG4gICAgICAgICAgICAuY29ubmVjdGVkVG8oXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb25kaXRpb25PcmlnaW4uZWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxuICAgICAgICAgICAgICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfVxuICAgICAgICAgICAgKTsqL1xuXG4gICAgICAgIC8qY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmFkZENvbmRpdGlvbk9yaWdpbi5lbGVtZW50UmVmKVxuICAgICAgICAud2l0aFBvc2l0aW9ucyhbe1xuICAgICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICAgICAgICB9XSk7Ki9cblxuICAgICAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuYWRkQ29uZGl0aW9uT3JpZ2luLmVsZW1lbnRSZWYpXG4gICAgICAgIC53aXRoUG9zaXRpb25zKFt7XG4gICAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgICAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgICAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgICAgICAgYmFja2Ryb3BDbGFzczogJ2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHN0cmF0ZWd5LFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuY2hpcFBhcmVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5hZGRDb25kaXRpb25UZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKSk7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxDaGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VBbGxDaGlwcygpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICAgICAgKHRoaXMuY2hpcElucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjwhLS1cbiAgICBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAgICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbi0tPlxuXG48Zm9ybSBjbGFzcz1cImR4Yy1jaGlwc1wiID5cbiAgICA8bWF0LWZvcm0tZmllbGQgW2NsYXNzLm1hdC1jaGlwLWZvcm0tZmllbGQtaW52YWxpZF09XCIhaXNWYWxpZCAmJiAhaXNEaXNhYmxlZFwiIFtjbGFzcy5keGMtY2hpcHMtZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiIGZ4RmxleD1cIjEwMCVcIiBbZmxvYXRMYWJlbF09XCInYXV0bydcIiAjY2hpcHBhcmVudD5cbiAgICAgICAgPG1hdC1sYWJlbD57e3BsYWNlaG9sZGVyfX08L21hdC1sYWJlbD5cbiAgICAgICAgPG1hdC1jaGlwLWxpc3QgI2NoaXBMaXN0PlxuICAgICAgICAgICAgPG1hdC1jaGlwICpuZ0Zvcj1cImxldCBjaGlwIG9mIHNob3dDaGlwcztsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCIgbWF0LXN0YW5kYXJkLWNoaXAgbWF0LWNoaXAtc2VsZWN0ZWRcIiBbc2VsZWN0YWJsZV09XCJzZWxlY3RhYmxlXCIgW2NvbG9yXT1cImNoaXAudmFsaWQgPyAnbm9ybWFsJzond2FybidcIiBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiIChyZW1vdmVkKT1cInJlbW92ZShjaGlwLGksJ2lkZWwnKVwiPlxuICAgICAgICAgICAgICAgIHt7Y2hpcC52YWx1ZX19XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdENoaXBSZW1vdmUgKm5nSWY9XCJyZW1vdmFibGUgJiYgIWlzRGlzYWJsZWRcIj5jYW5jZWw8L21hdC1pY29uPiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L21hdC1jaGlwPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aW5wdXQgI2NoaXBpbnB1dCBtYXRJbnB1dCByZWdFeFZhbGlkYXRpb25QYXR0ZXJuPVwie3tpbnB1dFZhbGlkYXRpb25Gb3JtYXR9fVwiIFtzdHlsZS5kaXNwbGF5XT1cInNlbGVjdGVkQ2hpcHMubGVuZ3RoID49IG1heENoaXBzQWxsb3cgPyAnbm9uZScgOiAnYmxvY2snIFwiXG4gICAgICAgICAgICAgICAgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwTGlzdFwiIFtmb3JtQ29udHJvbF09XCJjaGlwTGlzdEN0cmxcIiBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCJcbiAgICAgICAgICAgICAgICBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cImFkZE9uQmx1clwiIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGQoJGV2ZW50KVwiIChwYXN0ZSk9XCJvblBhc3RlKCRldmVudClcIiAvPlxuICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XG5cbiAgICAgICAgPGJ1dHRvbiBjZGstb3ZlcmxheS1vcmlnaW4gI2FkZENvbmRpdGlvbk9yaWdpbj1cImNka092ZXJsYXlPcmlnaW5cIiBbc3R5bGUuZGlzcGxheV09XCJpc1Nob3dNb3JlVmlzaWJsZT8nYmxvY2snOidub25lJ1wiIG1hdFN1ZmZpeFxuICAgICAgICAgICAgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJzaG93QWxsQ2hpcHMoKVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJzaG93IGFsbFwiPm1vcmVfaG9yaXo8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBjZGstcG9ydGFsICNhZGRDb25kaXRpb25UZW1wbGF0ZT1cImNka1BvcnRhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR4Yy1jaGlwcyBtYXQtZWxldmF0aW9uLXo4IGR4Yy1tb3JlLWNoaXBzXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jaGlwLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2hpcCAqbmdGb3I9XCJsZXQgY2hpcCBvZiBzZWxlY3RlZENoaXBzO2xldCBpID0gaW5kZXhcIiBjbGFzcz1cIiBtYXQtc3RhbmRhcmQtY2hpcCBtYXQtY2hpcC1zZWxlY3RlZFwiIFtjb2xvcl09XCJjaGlwLnZhbGlkID8gJ25vcm1hbCc6J3dhcm4nXCIgW3NlbGVjdGFibGVdPVwiZmFsc2VcIiBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiIChyZW1vdmVkKT1cInJlbW92ZShjaGlwLGksJ2FsbGRlbCcpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2NoaXAudmFsdWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdENoaXBSZW1vdmUgKm5nSWY9XCJyZW1vdmFibGUgJiYgIWlzRGlzYWJsZWRcIj5jYW5jZWw8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGlwPlxuICAgICAgICAgICAgICAgIDwvbWF0LWNoaXAtbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bWF0LWhpbnQgKm5nSWY9XCJpc1Bhc3RlZFwiPnt7cGFzdGVUZXh0fX08L21hdC1oaW50PlxuICAgICAgICA8bWF0LWhpbnQgKm5nSWY9XCJtYXhDaGlwc0FsbG93ID4gMFwiIGFsaWduPVwiZW5kXCI+e3tzZWxlY3RlZENoaXBzLmxlbmd0aH19L3t7bWF4Q2hpcHNBbGxvd319PC9tYXQtaGludD5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFpc1ZhbGlkICYmICFpc1Bhc3RlZCAmJiFpc0Rpc2FibGVkXCIgY2xhc3M9XCJtYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciBcIiA+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtYXQtZXJyb3JcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+Il19