/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Component, Input, ViewEncapsulation, ElementRef, forwardRef, ViewChild, Optional } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { OverlayConfig } from '@angular/cdk/overlay';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/chips";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/autocomplete";
import * as i7 from "@angular/material/core";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/common";
import * as i10 from "@angular/material/input";
import * as i11 from "@angular/cdk/portal";
// tslint:disable:no-forward-ref
// tslint:disable:no-empty
export class DxcChipAutocompleteComponent {
    constructor(elRef, overlay, _parentFormGroup) {
        this.elRef = elRef;
        this.overlay = overlay;
        this._parentFormGroup = _parentFormGroup;
        // chip-input form control
        this.autoCompleteChipList = new FormControl('');
        // mat-chip properties
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.isShowMoreVisible = false;
        this.disabled = false;
        // public filteredOptions: NgIterable<any>; //newcode
        this.chips = [];
        this.showChips = [];
        this.isInvalid = false;
        this.isError = false;
        this.errorMessage = '';
        this.isPasted = false;
        this.pasteText = '';
        this.dropdownValue = [];
        this.startIndex = 0;
        this._dropdownList = [];
        this._dropdownLimit = 0;
        this._searchLimit = 0;
        this._displayDropdownByDefault = false;
        this._maxChipsAllow = 0;
        this._maxChipsShow = 0;
        this._replaceStop = ['***'];
        this._required = false;
        this._readonly = false;
        this._searchBy = 'all';
        this.propagateChange = () => {
        };
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
    }
    get required() {
        return this._required;
    }
    set readonly(value) {
        this._readonly = coerceBooleanProperty(value);
    }
    get readonly() {
        return this._readonly;
    }
    set dropdownList(obs) {
        if (obs) { //newcode
            this.ddlSubscription = obs.subscribe((list) => {
                this._dropdownList = list;
                this.dropdownValue = this._dropdownList;
                const selectedChips = [];
                for (const chip of this.chips) {
                    selectedChips.push(chip.id);
                }
                this.writeValue(selectedChips);
            });
        }
    }
    set dropdownLimit(value) {
        this._dropdownLimit = value;
    }
    get dropdownLimit() {
        return this._dropdownLimit;
    }
    set searchLimit(value) {
        this._searchLimit = value;
    }
    get searchLimit() {
        return this._searchLimit;
    }
    set displayDropdownByDefault(value) {
        this._displayDropdownByDefault = coerceBooleanProperty(value);
    }
    get displayDropdownByDefault() {
        return this._displayDropdownByDefault;
    }
    set maxChipsAllow(value) {
        this._maxChipsAllow = value;
        if (value !== 0 && this._maxChipsShow > value) {
            throw new Error('maxChipsShow should be lesser than or equal to maxChipsAllow');
        }
    }
    get maxChipsAllow() {
        return this._maxChipsAllow;
    }
    set maxChipsShow(value) {
        this._maxChipsShow = value;
        if (this._maxChipsAllow !== 0 && value > this._maxChipsAllow) {
            throw new Error('maxChipsShow should be lesser than or equal to maxChipsAllow');
        }
    }
    get maxChipsShow() {
        return this._maxChipsShow;
    }
    set replaceStop(value) {
        if (typeof value === 'string') {
            this._replaceStop = [value];
        }
        else {
            this._replaceStop = value;
        }
    }
    set searchBy(value) {
        this._searchBy = value;
    }
    get searchBy() {
        return this._searchBy;
    }
    ngOnInit() {
        this.showDropdropdown(); // newcode
        this.controlSubscription = this.autoCompleteChipList.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
            if (val) {
                this.updateDropdown(val);
            }
        });
    }
    ngOnChanges() {
        this.returnData(this.chips);
    }
    ngDoCheck() {
        this.returnData(this.chips);
    }
    ngOnDestroy() {
        this._dropdownList = [];
        this.dropdownValue = [];
        if (this.ddlSubscription) {
            this.ddlSubscription.unsubscribe();
        }
        if (this.controlSubscription) {
            this.controlSubscription.unsubscribe();
        }
    }
    registerOnValidatorChange(fn) {
    }
    validate(c) {
        const errors = [];
        if (this.isInvalid) {
            return ({ parseError: true });
        }
        return null;
    }
    writeValue(obj) {
        this.chips = [];
        this.showChips = this.setShowChips(this.chips);
        if (this.chipInput) { // newcode
            this.chipInput.nativeElement.value = '';
        }
        this.autoCompleteChipList.reset();
        this.dropdownValue = this._dropdownList;
        this.updateDropdown('');
        this.toggleInput('');
        this.ForEditControl(obj);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        if (isDisabled) {
            this.autoCompleteChipList.disable();
            console.log('disabled');
        }
        else {
            this.autoCompleteChipList.enable();
            console.log('enabled');
        }
    }
    clearOnBlur() {
        // let chipValue = [];
        // if (this.autoCompleteChipList.value && (typeof this.autoCompleteChipList.value) === 'string' ) {
        //   // console.log(this.autoCompleteChipList.value);
        //   chipValue = this.dropdownValue.filter(
        //     (obj) => obj.id.toLowerCase() === this.autoCompleteChipList.value.trim().toLowerCase()
        //   );
        // }
        // if (chipValue.length > 0) {
        //   const selection = chipValue[0];
        //   if (selection.id === this._replaceStop) {
        //     this.chips = [];
        //   }
        //   if (this.chips.filter((obj) => obj.id === selection.id).length === 0) {
        //     this.chips.push(selection);
        //   }
        //   this.showChips = this.setShowChips(this.chips);
        //   this.dropdownValue = this.dropdownValue.filter((obj) => obj.id !== selection.id);
        //   this.returnData(this.chips);
        //   if (this.displayDropdownByDefault === true) {
        //     this.filteredOptions = this.dropdownValue.slice(0, 10);
        //   }
        //   this.toggleInput(selection.id);
        //   // this.updateDropdown('');
        //   (this.chipInput.nativeElement as HTMLInputElement).focus();
        // }
        this.chipInput.nativeElement.value = '';
        this.validateAllChips();
        // this.autoCompleteChipList.reset();
    }
    onPaste(event) {
        if (!this.disabled && !this.readonly) {
            const pastedItems = event.clipboardData.getData('Text').split(/[.]|[,]|[\s]|[\r]|[\n]/).filter((value) => value.trim() !== '');
            let i = 0;
            for (const item of pastedItems) {
                let chipValue = [];
                chipValue = this.dropdownValue.filter((obj) => obj.id.toLowerCase() === item.trim().toLowerCase());
                if (chipValue.length > 0) {
                    const selection = chipValue[0];
                    if (this._replaceStop.filter((m) => m === selection.id).length > 0) {
                        this.chips = [];
                        this.dropdownValue = this._dropdownList;
                    }
                    if (this.chips.filter((obj) => obj.id === selection.id).length === 0) {
                        this.chips.push(selection);
                        i++;
                    }
                    // this.dropdownValue = this.dropdownValue.filter((obj) => obj.id !== selection.id);
                    if (!this.toggleInput(selection.id)) {
                        this.pasteText = i + ' of ' + pastedItems.length + ' items pasted. Max count reached';
                        break;
                    }
                }
                else {
                    if (this.chips.filter((obj) => obj.id.toLowerCase() === item.trim().toLowerCase()).length <= 0) {
                        const selection = {
                            id: item.trim(),
                            displayText: '',
                            value: item.trim(),
                            isUnavaliable: true
                        };
                        i++;
                        this.chips.push(selection);
                        if (!this.toggleInput(item)) {
                            this.pasteText = i + ' of ' + pastedItems.length + ' items pasted. Max count reached';
                            break;
                        }
                    }
                }
            }
            // console.log(this.chips);
            if (this.pasteText === '') {
                this.pasteText = i + ' of ' + pastedItems.length + ' items pasted.';
            }
            this.isPasted = true;
            setTimeout(() => {
                this.isPasted = false;
                this.pasteText = '';
            }, 3000);
            this.showChips = this.setShowChips(this.chips);
            this.returnData(this.chips);
            this.showDropdropdown();
        }
        event.preventDefault();
    }
    ngAfterViewInit() {
    }
    updateDropdown(str) {
        const strLength = str.length;
        const searchLimit = this.searchLimit ? this.searchLimit : 1;
        const dropLimit = this.dropdownLimit ? this.dropdownLimit : 10;
        const selectedChipLength = this.chips.length;
        if (this._maxChipsAllow !== 0 && this._maxChipsAllow <= selectedChipLength) {
            this.filteredOptions = this.dropdownValue.slice(0, 0);
        }
        else if (strLength >= searchLimit) {
            let tempFilter;
            switch (this._searchBy) {
                case 'id':
                    tempFilter = this.dropdownValue.filter((e) => e.id.toLowerCase().indexOf(str.toString().toLowerCase()) === 0)
                        .filter((e) => this.chips.filter((s) => s.id === e.id).length <= 0);
                    break;
                case 'value':
                    tempFilter = this.dropdownValue.filter((e) => e.value.toLowerCase().indexOf(str.toString().toLowerCase()) !== -1)
                        .filter((e) => this.chips.filter((s) => s.id === e.id).length <= 0);
                    break;
                default:
                    tempFilter = this.dropdownValue
                        .filter((e) => {
                        return (e.id.toLowerCase().indexOf(str.toString().toLowerCase()) === 0) ||
                            (e.value.toLowerCase().indexOf(str.toString().toLowerCase()) !== -1);
                    }).filter((e) => this.chips.filter((s) => s.id === e.id).length <= 0);
            }
            this.filteredOptions = tempFilter.sort((a, b) => {
                return (a.id.toLowerCase().indexOf(str.toLowerCase()) === 0) ? -1 :
                    (b.id.toLowerCase().indexOf(str.toLowerCase()) === 0) ? 1 : 0;
            })
                .slice(0, dropLimit);
        }
        else if (this._displayDropdownByDefault === true && strLength === 0) {
            this.filteredOptions = this.dropdownValue.slice(0, dropLimit);
        }
        else {
            this.filteredOptions = this.dropdownValue.slice(0, 0);
        }
    }
    toggleInput(val) {
        if (this._replaceStop.filter((m) => m === val).length > 0 || (this._maxChipsAllow !== 0 && this.chips.length >= this._maxChipsAllow)) {
            this._readonly = true;
            return false;
        }
        else {
            this.readonly = false;
            return true;
        }
    }
    addChip(event, input) {
        const selection = event.option.value;
        if (this._replaceStop.filter((m) => m === selection.id).length > 0) {
            this.chips = [];
        }
        if (this.chips.filter((obj) => obj.id === selection.id).length === 0) {
            this.chips.push(selection);
        }
        this.showChips = this.setShowChips(this.chips);
        // (this.chipInput.nativeElement as HTMLInputElement).focus();
        // this.autoCompleteChipList.markAsPristine();
        // this.dropdownValue = this.dropdownValue.filter((obj) => obj.id !== selection.id);
        if (input) {
            input.value = '';
        }
        this.returnData(this.chips);
        this.showDropdropdown();
        this.toggleInput(selection.id);
    }
    setShowChips(chips) {
        if (this._maxChipsShow === 0) {
            return chips;
        }
        this.startIndex = (chips.length > this._maxChipsShow) ?
            (chips.length - this._maxChipsShow) : 0;
        this.isShowMoreVisible = this.startIndex > 0 ? true : false;
        return chips.slice(this.startIndex);
    }
    removeChip(chip, deleteType) {
        console.log("dxc auto remove call");
        const index = this.chips.indexOf(chip);
        if (!this.disabled) {
            if (index >= 0) {
                this.chips.splice(index, 1);
                // if (!chip.isUnavaliable) {
                //   this.dropdownValue.push(chip);
                // }
                this.showChips = this.setShowChips(this.chips);
                this.chipInput.nativeElement.focus();
            }
            this.returnData(this.chips);
            this.showDropdropdown();
            if (this.chips.length === 0) {
                this.closeAllChips();
            }
            this.toggleInput('');
        }
    }
    returnData(value) {
        const selectedChips = [];
        for (const chip of value) {
            selectedChips.push(chip.id);
        }
        this.validateAllChips();
        this.propagateChange(selectedChips);
    }
    ForEditControl(value) {
        if ((value && value !== null && value.length >= 1) &&
            (this.chips === undefined || this.chips.length < 1)) {
            for (const item of value) {
                if (this.dropdownValue.filter((obj) => obj.id === item).length > 0) {
                    const valChip = this.dropdownValue.filter((obj) => obj.id === item);
                    this.chips.push(valChip[0]);
                    // this.dropdownValue = this.dropdownValue.filter((obj) => obj.id !== item);
                    this.toggleInput(item);
                }
                else {
                    const valChip = {
                        id: item,
                        displayText: '',
                        value: item,
                        isUnavaliable: true
                    };
                    this.chips.push(valChip);
                    this.toggleInput(item);
                    // console.warn(item + ' missing in suggestion dropdown. Cannot be retrived if deleted');
                }
            }
            this.showChips = this.setShowChips(this.chips);
        }
        // this.returnData(this.chips);
    }
    validateAllChips() {
        this.autoCompleteChipList.setErrors(null);
        if (!this.disabled) {
            if (this._required && this.chips.length === 0) {
                this.isError = true;
                this.autoCompleteChipList.setErrors({ required: true });
                this.errorMessage = 'Required';
            }
            else {
                this.isError = false;
            }
            if (this.chips.filter((obj) => obj.isUnavaliable).length > 0) {
                this.isInvalid = true;
                this.autoCompleteChipList.setErrors({ invalid: true });
                this.errorMessage = 'Invalid Item(s)';
            }
            else {
                this.isInvalid = false;
            }
        }
        else {
            this.autoCompleteChipList.disable();
        }
    }
    showAllChips() {
        /* const strategy = this.overlay.position()
           .connectedTo(
             this.addConditionOrigin.elementRef,
             { originX: 'end', originY: 'bottom' },
             { overlayX: 'end', overlayY: 'top' });*/
        const strategy = this.overlay.position()
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
            }]);
        /* const strategy = this.overlay.position()
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
           }]); */
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
    showDropdropdown() {
        if (this._displayDropdownByDefault && this._displayDropdownByDefault === true) {
            const dropLimit = this.dropdownLimit ? this.dropdownLimit : 10;
            this.filteredOptions = this.dropdownValue.slice(0, this._dropdownLimit);
            // (this.chipInput.nativeElement as HTMLInputElement).focus();
        }
    }
}
DxcChipAutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipAutocompleteComponent, deps: [{ token: i0.ElementRef }, { token: i1.Overlay }, { token: i2.FormGroupDirective, optional: true }], target: i0.ɵɵFactoryTarget.Component });
DxcChipAutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcChipAutocompleteComponent, selector: "dxc-chip-autocomplete", inputs: { placeholder: "placeholder", hint: "hint", required: "required", readonly: "readonly", dropdownList: "dropdownList", dropdownLimit: "dropdownLimit", searchLimit: "searchLimit", displayDropdownByDefault: "displayDropdownByDefault", maxChipsAllow: "maxChipsAllow", maxChipsShow: "maxChipsShow", replaceStop: "replaceStop", searchBy: "searchBy" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DxcChipAutocompleteComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DxcChipAutocompleteComponent),
            multi: true
        }
    ], viewQueries: [{ propertyName: "addConditionOrigin", first: true, predicate: ["addConditionOrigin"], descendants: true }, { propertyName: "addConditionTemplate", first: true, predicate: ["addConditionTemplate"], descendants: true }, { propertyName: "chipParent", first: true, predicate: ["chipparent"], descendants: true, read: ElementRef }, { propertyName: "chipInput", first: true, predicate: ["chipInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<form class=\"dxc-chip-autocomplete\">\n\t<mat-form-field #chipparent [class.mat-chip-form-field-invalid]=\"!!(autoCompleteChipList && autoCompleteChipList.invalid && (autoCompleteChipList.touched || (_parentFormGroup && _parentFormGroup.submitted)))\">\n\t\t<mat-label>{{placeholder}}</mat-label>\n\t\t<mat-chip-list #chipList class=\"dxc-chips\" >\n\t\t\t<mat-chip class=\" mat-standard-chip mat-chip-selected\" selected=\"true\" *ngFor=\"let chip of showChips\" [selectable]=\"selectable\" [color]=\"chip.isUnavaliable ? 'warn':'normal'\" [removable]=\"removable\" (removed)=\"removeChip(chip)\">\n\t\t\t\t{{chip.displayText || chip.id}} \n\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable && !disabled\">cancel</mat-icon>\t\t\t\t\n\t\t\t</mat-chip>\n\t\t\t<input matInput [readonly]=\"readonly\" #chipInput class=\"autoInput\" \n\t\t\t\t[matChipInputFor]=\"chipList\"\n\t\t\t\t[matAutocomplete]=\"auto\" \n\t\t\t\t[matChipInputAddOnBlur]=\"addOnBlur\" \n\t\t\t\t[formControl]=\"autoCompleteChipList\" \n\t\t\t\t(blur)=\"clearOnBlur()\" (focus)=\"updateDropdown('')\" (paste)=\"onPaste($event)\"/>\n\t\t</mat-chip-list>\n\t\t<mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"addChip($event, chipInput)\">\n\t\t\t<mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option\">\n\t\t\t\t<span>{{option.value}}</span>\n\t\t\t</mat-option>\n\t\t</mat-autocomplete>\n\t\t<button cdk-overlay-origin #addConditionOrigin=\"cdkOverlayOrigin\" [style.display]=\"isShowMoreVisible?'block':'none'\" matSuffix\n\t\t    mat-icon-button color=\"primary\" (click)=\"showAllChips()\">\n\t\t\t<mat-icon aria-label=\"show all\">more_horiz</mat-icon>\n\t\t</button>\n\n\t\t<ng-template cdk-portal #addConditionTemplate=\"cdkPortal\">\n\t\t\t<div class=\"dxc-chip-autocomplete mat-elevation-z8 dxc-more-chips\">\n\t\t\t\t<mat-chip-list #chipList>\n\t\t\t\t\t<mat-chip class=\" mat-standard-chip mat-chip-selected\" selected=\"true\" *ngFor=\"let chip of chips;let i = index\" [selectable]=\"false\" [color]=\"chip.isUnavaliable ? 'warn':'normal'\" [removable]=\"removable\" (removed)=\"removeChip(chip)\">\n\t\t\t\t\t\t{{chip.displayText || chip.id}}\n\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable && !disabled\">cancel</mat-icon>\n\t\t\t\t\t</mat-chip>\n\t\t\t\t</mat-chip-list>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<mat-hint *ngIf=\"maxChipsAllow > 0\" align=\"end\">{{chips.length}}/{{maxChipsAllow}}</mat-hint>\n\t\t<mat-hint *ngIf=\"isPasted\">{{pasteText}}</mat-hint>\n\t\t<mat-hint *ngIf=\"hint && !isInvalid && !isError && !isPasted\">{{hint}}</mat-hint>\n\t\t<!-- <mat-hint *ngIf=\"tempHint && !isInvalid\" align=\"start\" class=\"errorhighlight\">{{errorMessage}}</mat-hint> -->\n\t\t<mat-hint class=\"mat-error\" *ngIf=\"!isPasted && !!(autoCompleteChipList && autoCompleteChipList.invalid && (autoCompleteChipList.touched || (_parentFormGroup && _parentFormGroup.submitted)))\">{{errorMessage}}</mat-hint>\n\t\t<!-- <mat-hint class=\"mat-error\" *ngIf=\"autoCompleteChipList.hasError('invalid')\">Invalid chip(s)</mat-hint> -->\n\t</mat-form-field>\n\t\n</form>", styles: ["@charset \"UTF-8\";.dxc-chip-autocomplete .mat-form-field{width:100%}.displayNone{display:none}.displayBlock{display:block}.mat-autocomplete-panel.mat-autocomplete-visible{min-width:400px!important}.dxc-chip-autocomplete .mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:2px 4px 0 0}.dxc-chip-autocomplete .mat-chip-list-wrapper{margin-top:-2px}.dxc-chip-autocomplete .mat-chip:not(.mat-basic-chip){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:inline-flex;padding:1px 8px;border-radius:24px;align-items:center;cursor:default;margin-top:2px;margin-right:4px}.error-underline .mat-input-underline{background-color:#dc3716}.error-underline .mat-form-field-label,.error-underline .errorhighlight,.errorhighlight{color:#dc3716}.dxc-more-chips{border-radius:2px;margin-top:-2em;padding:8px;background-color:#fff;max-height:200px;overflow-y:auto}\n"], components: [{ type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i4.MatChipList, selector: "mat-chip-list", inputs: ["errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i6.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i7.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i8.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.MatLabel, selector: "mat-label" }, { type: i9.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.MatChipRemove, selector: "[matChipRemove]" }, { type: i10.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { type: i6.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { type: i3.MatSuffix, selector: "[matSuffix]" }, { type: i11.TemplatePortalDirective, selector: "[cdk-portal], [portal]", exportAs: ["cdkPortal"] }, { type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-chip-autocomplete', encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DxcChipAutocompleteComponent),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => DxcChipAutocompleteComponent),
                            multi: true
                        }
                    ], template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<form class=\"dxc-chip-autocomplete\">\n\t<mat-form-field #chipparent [class.mat-chip-form-field-invalid]=\"!!(autoCompleteChipList && autoCompleteChipList.invalid && (autoCompleteChipList.touched || (_parentFormGroup && _parentFormGroup.submitted)))\">\n\t\t<mat-label>{{placeholder}}</mat-label>\n\t\t<mat-chip-list #chipList class=\"dxc-chips\" >\n\t\t\t<mat-chip class=\" mat-standard-chip mat-chip-selected\" selected=\"true\" *ngFor=\"let chip of showChips\" [selectable]=\"selectable\" [color]=\"chip.isUnavaliable ? 'warn':'normal'\" [removable]=\"removable\" (removed)=\"removeChip(chip)\">\n\t\t\t\t{{chip.displayText || chip.id}} \n\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable && !disabled\">cancel</mat-icon>\t\t\t\t\n\t\t\t</mat-chip>\n\t\t\t<input matInput [readonly]=\"readonly\" #chipInput class=\"autoInput\" \n\t\t\t\t[matChipInputFor]=\"chipList\"\n\t\t\t\t[matAutocomplete]=\"auto\" \n\t\t\t\t[matChipInputAddOnBlur]=\"addOnBlur\" \n\t\t\t\t[formControl]=\"autoCompleteChipList\" \n\t\t\t\t(blur)=\"clearOnBlur()\" (focus)=\"updateDropdown('')\" (paste)=\"onPaste($event)\"/>\n\t\t</mat-chip-list>\n\t\t<mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"addChip($event, chipInput)\">\n\t\t\t<mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option\">\n\t\t\t\t<span>{{option.value}}</span>\n\t\t\t</mat-option>\n\t\t</mat-autocomplete>\n\t\t<button cdk-overlay-origin #addConditionOrigin=\"cdkOverlayOrigin\" [style.display]=\"isShowMoreVisible?'block':'none'\" matSuffix\n\t\t    mat-icon-button color=\"primary\" (click)=\"showAllChips()\">\n\t\t\t<mat-icon aria-label=\"show all\">more_horiz</mat-icon>\n\t\t</button>\n\n\t\t<ng-template cdk-portal #addConditionTemplate=\"cdkPortal\">\n\t\t\t<div class=\"dxc-chip-autocomplete mat-elevation-z8 dxc-more-chips\">\n\t\t\t\t<mat-chip-list #chipList>\n\t\t\t\t\t<mat-chip class=\" mat-standard-chip mat-chip-selected\" selected=\"true\" *ngFor=\"let chip of chips;let i = index\" [selectable]=\"false\" [color]=\"chip.isUnavaliable ? 'warn':'normal'\" [removable]=\"removable\" (removed)=\"removeChip(chip)\">\n\t\t\t\t\t\t{{chip.displayText || chip.id}}\n\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable && !disabled\">cancel</mat-icon>\n\t\t\t\t\t</mat-chip>\n\t\t\t\t</mat-chip-list>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<mat-hint *ngIf=\"maxChipsAllow > 0\" align=\"end\">{{chips.length}}/{{maxChipsAllow}}</mat-hint>\n\t\t<mat-hint *ngIf=\"isPasted\">{{pasteText}}</mat-hint>\n\t\t<mat-hint *ngIf=\"hint && !isInvalid && !isError && !isPasted\">{{hint}}</mat-hint>\n\t\t<!-- <mat-hint *ngIf=\"tempHint && !isInvalid\" align=\"start\" class=\"errorhighlight\">{{errorMessage}}</mat-hint> -->\n\t\t<mat-hint class=\"mat-error\" *ngIf=\"!isPasted && !!(autoCompleteChipList && autoCompleteChipList.invalid && (autoCompleteChipList.touched || (_parentFormGroup && _parentFormGroup.submitted)))\">{{errorMessage}}</mat-hint>\n\t\t<!-- <mat-hint class=\"mat-error\" *ngIf=\"autoCompleteChipList.hasError('invalid')\">Invalid chip(s)</mat-hint> -->\n\t</mat-form-field>\n\t\n</form>", styles: ["@charset \"UTF-8\";.dxc-chip-autocomplete .mat-form-field{width:100%}.displayNone{display:none}.displayBlock{display:block}.mat-autocomplete-panel.mat-autocomplete-visible{min-width:400px!important}.dxc-chip-autocomplete .mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:2px 4px 0 0}.dxc-chip-autocomplete .mat-chip-list-wrapper{margin-top:-2px}.dxc-chip-autocomplete .mat-chip:not(.mat-basic-chip){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:inline-flex;padding:1px 8px;border-radius:24px;align-items:center;cursor:default;margin-top:2px;margin-right:4px}.error-underline .mat-input-underline{background-color:#dc3716}.error-underline .mat-form-field-label,.error-underline .errorhighlight,.errorhighlight{color:#dc3716}.dxc-more-chips{border-radius:2px;margin-top:-2em;padding:8px;background-color:#fff;max-height:200px;overflow-y:auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.Overlay }, { type: i2.FormGroupDirective, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], hint: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], dropdownList: [{
                type: Input,
                args: ['dropdownList']
            }], dropdownLimit: [{
                type: Input,
                args: ['dropdownLimit']
            }], searchLimit: [{
                type: Input,
                args: ['searchLimit']
            }], displayDropdownByDefault: [{
                type: Input
            }], maxChipsAllow: [{
                type: Input,
                args: ['maxChipsAllow']
            }], maxChipsShow: [{
                type: Input,
                args: ['maxChipsShow']
            }], replaceStop: [{
                type: Input,
                args: ['replaceStop']
            }], searchBy: [{
                type: Input,
                args: ['searchBy']
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
                args: ['chipInput']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHhjLWNoaXAtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jdXN0b20tZmllbGRzL2R4Yy1jaGlwLWF1dG9jb21wbGV0ZS9keGMtY2hpcC1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2N1c3RvbS1maWVsZHMvZHhjLWNoaXAtYXV0b2NvbXBsZXRlL2R4Yy1jaGlwLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFBd0IsS0FBSyxFQUN0QyxpQkFBaUIsRUFBRSxVQUFVLEVBQWEsVUFBVSxFQUFFLFNBQVMsRUFBb0MsUUFBUSxFQUM1RyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUF3QixpQkFBaUIsRUFBK0IsYUFBYSxFQUFvRCxNQUFNLGdCQUFnQixDQUFDO0FBU3BMLE9BQU8sRUFBeUMsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFNUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBRXRELGdDQUFnQztBQUNoQywwQkFBMEI7QUFvQjFCLE1BQU0sT0FBTyw0QkFBNEI7SUErSXZDLFlBQ1UsS0FBaUIsRUFDbEIsT0FBZ0IsRUFDSixnQkFBb0M7UUFGL0MsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ0oscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQTdJekQsMEJBQTBCO1FBQ25CLHlCQUFvQixHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvRCxzQkFBc0I7UUFDZixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWpDLHFEQUFxRDtRQUM5QyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsOEJBQXlCLEdBQVksS0FBSyxDQUFDO1FBQzNDLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGlCQUFZLEdBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUEyQixLQUFLLENBQUM7UUE4RzNDLG9CQUFlLEdBQVEsR0FBRyxFQUFFO1FBQ25DLENBQUMsQ0FBQTtJQUhHLENBQUM7SUF4R0wsSUFDSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQ0ksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUNJLFlBQVksQ0FBQyxHQUFvQjtRQUNuQyxJQUFJLEdBQUcsRUFBRSxFQUFFLFNBQVM7WUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3hDLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUM3QixhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDN0I7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQztJQUVELElBQ0ksYUFBYSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFDSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUNJLHdCQUF3QixDQUFDLEtBQWM7UUFDekMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxJQUFJLHdCQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFDSSxhQUFhLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLEVBQUU7WUFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFDSSxZQUFZLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzVELE1BQU0sSUFBSSxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztTQUNqRjtJQUNILENBQUM7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQ0ksV0FBVyxDQUFDLEtBQXdCO1FBQ3RDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBNkI7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBZ0JNLFFBQVE7UUFDYixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLFVBQVU7UUFDbkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDakcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNOLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7UUFDRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRU0seUJBQXlCLENBQUUsRUFBYztJQUNoRCxDQUFDO0lBRU0sUUFBUSxDQUFDLENBQWM7UUFDNUIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFVBQVUsQ0FBQyxHQUFHO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsVUFBVTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWtDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUMvRDtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEVBQU87UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEVBQU87SUFDaEMsQ0FBQztJQUVNLGdCQUFnQixDQUFFLFVBQW1CO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVNLFdBQVc7UUFDaEIsc0JBQXNCO1FBQ3RCLG1HQUFtRztRQUNuRyxxREFBcUQ7UUFDckQsMkNBQTJDO1FBQzNDLDZGQUE2RjtRQUM3RixPQUFPO1FBQ1AsSUFBSTtRQUNKLDhCQUE4QjtRQUM5QixvQ0FBb0M7UUFDcEMsOENBQThDO1FBQzlDLHVCQUF1QjtRQUN2QixNQUFNO1FBQ04sNEVBQTRFO1FBQzVFLGtDQUFrQztRQUNsQyxNQUFNO1FBQ04sb0RBQW9EO1FBQ3BELHNGQUFzRjtRQUN0RixpQ0FBaUM7UUFDakMsa0RBQWtEO1FBQ2xELDhEQUE4RDtRQUM5RCxNQUFNO1FBQ04sb0NBQW9DO1FBQ3BDLGdDQUFnQztRQUNoQyxnRUFBZ0U7UUFDaEUsSUFBSTtRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsYUFBa0MsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLHFDQUFxQztJQUN2QyxDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQXFCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMvSCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixLQUFLLE1BQU0sSUFBSSxJQUFJLFdBQVcsRUFBRTtnQkFDOUIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNuQixTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQ25DLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FDNUQsQ0FBQztnQkFDRixJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztxQkFDekM7b0JBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzNCLENBQUMsRUFBRSxDQUFDO3FCQUNMO29CQUNELG9GQUFvRjtvQkFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxrQ0FBa0MsQ0FBQzt3QkFDdEYsTUFBTTtxQkFDUDtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQzlGLE1BQU0sU0FBUyxHQUFHOzRCQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTs0QkFDZixXQUFXLEVBQUUsRUFBRTs0QkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTs0QkFDbEIsYUFBYSxFQUFFLElBQUk7eUJBQ3BCLENBQUM7d0JBQ0YsQ0FBQyxFQUFFLENBQUM7d0JBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxrQ0FBa0MsQ0FBQzs0QkFDdEYsTUFBTTt5QkFDUDtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsMkJBQTJCO1lBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO2FBQ3JFO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtRQUNDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sZUFBZTtJQUN0QixDQUFDO0lBRU0sY0FBYyxDQUFDLEdBQVc7UUFDL0IsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9ELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLGtCQUFrQixFQUFFO1lBQzFFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU0sSUFBSSxTQUFTLElBQUksV0FBVyxFQUFFO1lBQ25DLElBQUksVUFBZSxDQUFDO1lBQ3BCLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdEIsS0FBSyxJQUFJO29CQUNQLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUMxRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLE1BQU07Z0JBQ1IsS0FBSyxPQUFPO29CQUNWLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQzlHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEUsTUFBTTtnQkFDUjtvQkFDRSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWE7eUJBQzVCLE1BQU0sQ0FDTCxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUNKLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3JFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekUsQ0FBQyxDQUNGLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDUCxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FDRjtpQkFDRSxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMseUJBQXlCLEtBQUssSUFBSSxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDckUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUVNLFdBQVcsQ0FBQyxHQUFXO1FBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3BJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQW1DLEVBQUUsS0FBVTtRQUM1RCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyw4REFBOEQ7UUFDOUQsOENBQThDO1FBQzlDLG9GQUFvRjtRQUNwRixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLFlBQVksQ0FBQyxLQUFZO1FBQzlCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzVELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFTLEVBQUcsVUFBa0I7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLDZCQUE2QjtnQkFDN0IsbUNBQW1DO2dCQUNuQyxJQUFJO2dCQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBa0MsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUM1RDtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFLO1FBQ3JCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN6QixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLGNBQWMsQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNoRCxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3JELEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2xFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsNEVBQTRFO29CQUM1RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDTCxNQUFNLE9BQU8sR0FBRzt3QkFDZCxFQUFFLEVBQUUsSUFBSTt3QkFDUixXQUFXLEVBQUUsRUFBRTt3QkFDZixLQUFLLEVBQUUsSUFBSTt3QkFDWCxhQUFhLEVBQUUsSUFBSTtxQkFDcEIsQ0FBQztvQkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkIseUZBQXlGO2lCQUMxRjthQUNGO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRDtRQUNELCtCQUErQjtJQUNqQyxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7WUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRU0sWUFBWTtRQUNsQjs7OztxREFJNkM7UUFFMUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDdkMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQzthQUN2RCxhQUFhLENBQUMsQ0FBQztnQkFDZCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsS0FBSzthQUNoQixFQUFFO2dCQUNELE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsS0FBSztnQkFDZCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLFFBQVE7YUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFTDs7Ozs7Ozs7Ozs7O2tCQVlVO1FBRVgsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDL0IsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLGtDQUFrQztZQUNqRCxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUs7U0FDbkUsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFDakUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsNEJBQTRCO2dCQUM1QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxhQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBa0MsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1RDtJQUNILENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsSUFBSSxJQUFJLENBQUMseUJBQXlCLElBQUksSUFBSSxDQUFDLHlCQUF5QixLQUFLLElBQUksRUFBRTtZQUM3RSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDL0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hFLDhEQUE4RDtTQUMvRDtJQUNILENBQUM7O3lIQTdoQlUsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsa1pBZDVCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDM0QsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNEO1lBQ0UsT0FBTyxFQUFFLGFBQWE7WUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUMzRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YseVVBK0lnQyxVQUFVLDJJQzFMN0Msd3JHQWlETzsyRkRITSw0QkFBNEI7a0JBbkJ4QyxTQUFTOytCQUNFLHVCQUF1QixpQkFHbEIsaUJBQWlCLENBQUMsSUFBSSxhQUMxQjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSw2QkFBNkIsQ0FBQzs0QkFDM0QsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDZCQUE2QixDQUFDOzRCQUMzRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7MEJBcUpFLFFBQVE7NENBaEpLLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1UsSUFBSTtzQkFBbkIsS0FBSztnQkF5Q0YsUUFBUTtzQkFEWCxLQUFLO2dCQVNGLFFBQVE7c0JBRFgsS0FBSztnQkFTRixZQUFZO3NCQURmLEtBQUs7dUJBQUMsY0FBYztnQkFpQmpCLGFBQWE7c0JBRGhCLEtBQUs7dUJBQUMsZUFBZTtnQkFTbEIsV0FBVztzQkFEZCxLQUFLO3VCQUFDLGFBQWE7Z0JBU2hCLHdCQUF3QjtzQkFEM0IsS0FBSztnQkFTRixhQUFhO3NCQURoQixLQUFLO3VCQUFDLGVBQWU7Z0JBWWxCLFlBQVk7c0JBRGYsS0FBSzt1QkFBQyxjQUFjO2dCQVlqQixXQUFXO3NCQURkLEtBQUs7dUJBQUMsYUFBYTtnQkFVaEIsUUFBUTtzQkFEWCxLQUFLO3VCQUFDLFVBQVU7Z0JBUXdCLGtCQUFrQjtzQkFBMUQsU0FBUzt1QkFBQyxvQkFBb0I7Z0JBQ1ksb0JBQW9CO3NCQUE5RCxTQUFTO3VCQUFDLHNCQUFzQjtnQkFDc0IsVUFBVTtzQkFBaEUsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUNiLFNBQVM7c0JBQXhDLFNBQVM7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBVc2UsIGR1cGxpY2F0aW9uLCBhbmQvb3IgYWx0ZXJhdGlvbiBpcyBzdWJqZWN0IHRvIGxpY2Vuc2UgdGVybXMuXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgZm9yd2FyZFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRG9DaGVjaywgT3B0aW9uYWwsIEhvc3QsIFNraXBTZWxmLCBPbkRlc3Ryb3ksIE5nSXRlcmFibGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBWYWxpZGF0b3IsIFZhbGlkYXRpb25FcnJvcnMsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvcnMsIENvbnRyb2xDb250YWluZXIsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQsXG4gIE1hdEF1dG9jb21wbGV0ZVRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7XG4gIE1hdENoaXBJbnB1dEV2ZW50XG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb25MaWtlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBPdmVybGF5UmVmLCBPdmVybGF5LCBPdmVybGF5Q29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ2RrUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tZm9yd2FyZC1yZWZcbi8vIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeGMtY2hpcC1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJ2R4Yy1jaGlwLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkeGMtY2hpcC1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEeGNDaGlwQXV0b2NvbXBsZXRlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHhjQ2hpcEF1dG9jb21wbGV0ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIER4Y0NoaXBBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcblxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGhpbnQ6IHN0cmluZztcblxuICAvLyBjaGlwLWlucHV0IGZvcm0gY29udHJvbFxuICBwdWJsaWMgYXV0b0NvbXBsZXRlQ2hpcExpc3Q6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblxuICAvLyBtYXQtY2hpcCBwcm9wZXJ0aWVzXG4gIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHNlbGVjdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgcmVtb3ZhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGFkZE9uQmx1cjogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpc1Nob3dNb3JlVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIC8vIHB1YmxpYyBmaWx0ZXJlZE9wdGlvbnM6IE5nSXRlcmFibGU8YW55PjsgLy9uZXdjb2RlXG4gIHB1YmxpYyBjaGlwczogYW55ID0gW107XG4gIHB1YmxpYyBzaG93Q2hpcHMgPSBbXTtcbiAgcHVibGljIGlzSW52YWxpZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZXJyb3JNZXNzYWdlID0gJyc7XG5cbiAgcHVibGljIGlzUGFzdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwYXN0ZVRleHQ6IHN0cmluZyA9ICcnO1xuXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBkcm9wZG93blZhbHVlOiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSBzdGFydEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX2Ryb3Bkb3duTGlzdDogYW55ID0gW107XG4gIHByaXZhdGUgX2Ryb3Bkb3duTGltaXQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3NlYXJjaExpbWl0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9kaXNwbGF5RHJvcGRvd25CeURlZmF1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWF4Q2hpcHNBbGxvdzogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfbWF4Q2hpcHNTaG93OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9yZXBsYWNlU3RvcDogc3RyaW5nW10gPSBbJyoqKiddO1xuICBwcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWFyY2hCeTogJ2lkJyB8ICd2YWx1ZScgfCAnYWxsJyA9ICdhbGwnO1xuXG4gIHByaXZhdGUgZGRsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25MaWtlO1xuICBwcml2YXRlIGNvbnRyb2xTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVhZG9ubHkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIGdldCByZWFkb25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZG9ubHk7XG4gIH1cblxuICBASW5wdXQoJ2Ryb3Bkb3duTGlzdCcpXG4gIHNldCBkcm9wZG93bkxpc3Qob2JzOiBPYnNlcnZhYmxlPGFueT4pIHtcbiAgICBpZiAob2JzKSB7IC8vbmV3Y29kZVxuICAgICAgdGhpcy5kZGxTdWJzY3JpcHRpb24gPSBvYnMuc3Vic2NyaWJlKChsaXN0KSA9PiB7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duTGlzdCA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZHJvcGRvd25WYWx1ZSA9IHRoaXMuX2Ryb3Bkb3duTGlzdDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGlwcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGNoaXAgb2YgdGhpcy5jaGlwcykge1xuICAgICAgICAgIHNlbGVjdGVkQ2hpcHMucHVzaChjaGlwLmlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyaXRlVmFsdWUoc2VsZWN0ZWRDaGlwcyk7XG4gICAgICB9KTtcbiAgICB9XG4gICBcbiAgfVxuXG4gIEBJbnB1dCgnZHJvcGRvd25MaW1pdCcpXG4gIHNldCBkcm9wZG93bkxpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kcm9wZG93bkxpbWl0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRyb3Bkb3duTGltaXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd25MaW1pdDtcbiAgfVxuXG4gIEBJbnB1dCgnc2VhcmNoTGltaXQnKVxuICBzZXQgc2VhcmNoTGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NlYXJjaExpbWl0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlYXJjaExpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaExpbWl0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc3BsYXlEcm9wZG93bkJ5RGVmYXVsdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc3BsYXlEcm9wZG93bkJ5RGVmYXVsdCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IGRpc3BsYXlEcm9wZG93bkJ5RGVmYXVsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheURyb3Bkb3duQnlEZWZhdWx0O1xuICB9XG5cbiAgQElucHV0KCdtYXhDaGlwc0FsbG93JylcbiAgc2V0IG1heENoaXBzQWxsb3codmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heENoaXBzQWxsb3cgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgIT09IDAgJiYgdGhpcy5fbWF4Q2hpcHNTaG93ID4gdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4Q2hpcHNTaG93IHNob3VsZCBiZSBsZXNzZXIgdGhhbiBvciBlcXVhbCB0byBtYXhDaGlwc0FsbG93Jyk7XG4gICAgfVxuICB9XG4gIGdldCBtYXhDaGlwc0FsbG93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heENoaXBzQWxsb3c7XG4gIH1cblxuICBASW5wdXQoJ21heENoaXBzU2hvdycpXG4gIHNldCBtYXhDaGlwc1Nob3codmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heENoaXBzU2hvdyA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9tYXhDaGlwc0FsbG93ICE9PSAwICYmIHZhbHVlID4gdGhpcy5fbWF4Q2hpcHNBbGxvdykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXhDaGlwc1Nob3cgc2hvdWxkIGJlIGxlc3NlciB0aGFuIG9yIGVxdWFsIHRvIG1heENoaXBzQWxsb3cnKTtcbiAgICB9XG4gIH1cbiAgZ2V0IG1heENoaXBzU2hvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXhDaGlwc1Nob3c7XG4gIH1cblxuICBASW5wdXQoJ3JlcGxhY2VTdG9wJylcbiAgc2V0IHJlcGxhY2VTdG9wKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9yZXBsYWNlU3RvcCA9IFt2YWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlcGxhY2VTdG9wID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCdzZWFyY2hCeScpXG4gIHNldCBzZWFyY2hCeSh2YWx1ZTogJ2lkJyB8ICd2YWx1ZScgfCAnYWxsJykge1xuICAgIHRoaXMuX3NlYXJjaEJ5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlYXJjaEJ5KCk6ICdpZCcgfCAndmFsdWUnIHwgJ2FsbCcge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hCeTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2FkZENvbmRpdGlvbk9yaWdpbicpIHByaXZhdGUgYWRkQ29uZGl0aW9uT3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBAVmlld0NoaWxkKCdhZGRDb25kaXRpb25UZW1wbGF0ZScpIHByaXZhdGUgYWRkQ29uZGl0aW9uVGVtcGxhdGU6IENka1BvcnRhbDtcbiAgQFZpZXdDaGlsZCgnY2hpcHBhcmVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwcml2YXRlIGNoaXBQYXJlbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NoaXBJbnB1dCcpIHByaXZhdGUgY2hpcElucHV0OiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmVcbiAgKSB7IH1cblxuICBwdWJsaWMgcHJvcGFnYXRlQ2hhbmdlOiBhbnkgPSAoKSA9PiB7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaG93RHJvcGRyb3Bkb3duKCk7IC8vIG5ld2NvZGVcbiAgICB0aGlzLmNvbnRyb2xTdWJzY3JpcHRpb24gPSB0aGlzLmF1dG9Db21wbGV0ZUNoaXBMaXN0LnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoXG4gICAgICAodmFsKSA9PiB7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMucmV0dXJuRGF0YSh0aGlzLmNoaXBzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5yZXR1cm5EYXRhKHRoaXMuY2hpcHMpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Ryb3Bkb3duTGlzdCA9IFtdO1xuICAgIHRoaXMuZHJvcGRvd25WYWx1ZSA9IFtdO1xuICAgIGlmICggdGhpcy5kZGxTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZGRsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnRyb2xTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY29udHJvbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH0gICBcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlPyhmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlKGM6IEZvcm1Db250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgaWYgKHRoaXMuaXNJbnZhbGlkKSB7XG4gICAgICByZXR1cm4gKHsgcGFyc2VFcnJvcjogdHJ1ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZShvYmopOiB2b2lkIHtcbiAgICB0aGlzLmNoaXBzID0gW107XG4gICAgdGhpcy5zaG93Q2hpcHMgPSB0aGlzLnNldFNob3dDaGlwcyh0aGlzLmNoaXBzKTtcbiAgICBpZiAodGhpcy5jaGlwSW5wdXQpIHsgLy8gbmV3Y29kZVxuICAgICAgKHRoaXMuY2hpcElucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcbiAgICB9XG4gIFxuICAgIHRoaXMuYXV0b0NvbXBsZXRlQ2hpcExpc3QucmVzZXQoKTtcbiAgICB0aGlzLmRyb3Bkb3duVmFsdWUgPSB0aGlzLl9kcm9wZG93bkxpc3Q7XG4gICAgdGhpcy51cGRhdGVEcm9wZG93bignJyk7XG4gICAgdGhpcy50b2dnbGVJbnB1dCgnJyk7XG4gICAgdGhpcy5Gb3JFZGl0Q29udHJvbChvYmopO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGVDaGlwTGlzdC5kaXNhYmxlKCk7XG4gICAgICBjb25zb2xlLmxvZygnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGVDaGlwTGlzdC5lbmFibGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmFibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyT25CbHVyKCkge1xuICAgIC8vIGxldCBjaGlwVmFsdWUgPSBbXTtcbiAgICAvLyBpZiAodGhpcy5hdXRvQ29tcGxldGVDaGlwTGlzdC52YWx1ZSAmJiAodHlwZW9mIHRoaXMuYXV0b0NvbXBsZXRlQ2hpcExpc3QudmFsdWUpID09PSAnc3RyaW5nJyApIHtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXV0b0NvbXBsZXRlQ2hpcExpc3QudmFsdWUpO1xuICAgIC8vICAgY2hpcFZhbHVlID0gdGhpcy5kcm9wZG93blZhbHVlLmZpbHRlcihcbiAgICAvLyAgICAgKG9iaikgPT4gb2JqLmlkLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuYXV0b0NvbXBsZXRlQ2hpcExpc3QudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAvLyAgICk7XG4gICAgLy8gfVxuICAgIC8vIGlmIChjaGlwVmFsdWUubGVuZ3RoID4gMCkge1xuICAgIC8vICAgY29uc3Qgc2VsZWN0aW9uID0gY2hpcFZhbHVlWzBdO1xuICAgIC8vICAgaWYgKHNlbGVjdGlvbi5pZCA9PT0gdGhpcy5fcmVwbGFjZVN0b3ApIHtcbiAgICAvLyAgICAgdGhpcy5jaGlwcyA9IFtdO1xuICAgIC8vICAgfVxuICAgIC8vICAgaWYgKHRoaXMuY2hpcHMuZmlsdGVyKChvYmopID0+IG9iai5pZCA9PT0gc2VsZWN0aW9uLmlkKS5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgICAgdGhpcy5jaGlwcy5wdXNoKHNlbGVjdGlvbik7XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLnNob3dDaGlwcyA9IHRoaXMuc2V0U2hvd0NoaXBzKHRoaXMuY2hpcHMpO1xuICAgIC8vICAgdGhpcy5kcm9wZG93blZhbHVlID0gdGhpcy5kcm9wZG93blZhbHVlLmZpbHRlcigob2JqKSA9PiBvYmouaWQgIT09IHNlbGVjdGlvbi5pZCk7XG4gICAgLy8gICB0aGlzLnJldHVybkRhdGEodGhpcy5jaGlwcyk7XG4gICAgLy8gICBpZiAodGhpcy5kaXNwbGF5RHJvcGRvd25CeURlZmF1bHQgPT09IHRydWUpIHtcbiAgICAvLyAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLmRyb3Bkb3duVmFsdWUuc2xpY2UoMCwgMTApO1xuICAgIC8vICAgfVxuICAgIC8vICAgdGhpcy50b2dnbGVJbnB1dChzZWxlY3Rpb24uaWQpO1xuICAgIC8vICAgLy8gdGhpcy51cGRhdGVEcm9wZG93bignJyk7XG4gICAgLy8gICAodGhpcy5jaGlwSW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5mb2N1cygpO1xuICAgIC8vIH1cbiAgICAodGhpcy5jaGlwSW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xuICAgIHRoaXMudmFsaWRhdGVBbGxDaGlwcygpO1xuICAgIC8vIHRoaXMuYXV0b0NvbXBsZXRlQ2hpcExpc3QucmVzZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvblBhc3RlKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkb25seSkge1xuICAgIGNvbnN0IHBhc3RlZEl0ZW1zID0gZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0Jykuc3BsaXQoL1suXXxbLF18W1xcc118W1xccl18W1xcbl0vKS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09ICcnKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHBhc3RlZEl0ZW1zKSB7XG4gICAgICBsZXQgY2hpcFZhbHVlID0gW107XG4gICAgICBjaGlwVmFsdWUgPSB0aGlzLmRyb3Bkb3duVmFsdWUuZmlsdGVyKFxuICAgICAgICAob2JqKSA9PiBvYmouaWQudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGlmIChjaGlwVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBjaGlwVmFsdWVbMF07XG4gICAgICAgIGlmICh0aGlzLl9yZXBsYWNlU3RvcC5maWx0ZXIoKG0pID0+IG0gPT09IHNlbGVjdGlvbi5pZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuY2hpcHMgPSBbXTtcbiAgICAgICAgICB0aGlzLmRyb3Bkb3duVmFsdWUgPSB0aGlzLl9kcm9wZG93bkxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hpcHMuZmlsdGVyKChvYmopID0+IG9iai5pZCA9PT0gc2VsZWN0aW9uLmlkKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmNoaXBzLnB1c2goc2VsZWN0aW9uKTtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5kcm9wZG93blZhbHVlID0gdGhpcy5kcm9wZG93blZhbHVlLmZpbHRlcigob2JqKSA9PiBvYmouaWQgIT09IHNlbGVjdGlvbi5pZCk7XG4gICAgICAgIGlmICghdGhpcy50b2dnbGVJbnB1dChzZWxlY3Rpb24uaWQpKSB7XG4gICAgICAgICAgdGhpcy5wYXN0ZVRleHQgPSBpICsgJyBvZiAnICsgcGFzdGVkSXRlbXMubGVuZ3RoICsgJyBpdGVtcyBwYXN0ZWQuIE1heCBjb3VudCByZWFjaGVkJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpcHMuZmlsdGVyKChvYmopID0+IG9iai5pZC50b0xvd2VyQ2FzZSgpID09PSBpdGVtLnRyaW0oKS50b0xvd2VyQ2FzZSgpKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIGlkOiBpdGVtLnRyaW0oKSxcbiAgICAgICAgICAgIGRpc3BsYXlUZXh0OiAnJyxcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLnRyaW0oKSxcbiAgICAgICAgICAgIGlzVW5hdmFsaWFibGU6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICB0aGlzLmNoaXBzLnB1c2goc2VsZWN0aW9uKTtcbiAgICAgICAgICBpZiAoIXRoaXMudG9nZ2xlSW5wdXQoaXRlbSkpIHtcbiAgICAgICAgICAgIHRoaXMucGFzdGVUZXh0ID0gaSArICcgb2YgJyArIHBhc3RlZEl0ZW1zLmxlbmd0aCArICcgaXRlbXMgcGFzdGVkLiBNYXggY291bnQgcmVhY2hlZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jaGlwcyk7XG4gICAgaWYgKHRoaXMucGFzdGVUZXh0ID09PSAnJykge1xuICAgICAgdGhpcy5wYXN0ZVRleHQgPSBpICsgJyBvZiAnICsgcGFzdGVkSXRlbXMubGVuZ3RoICsgJyBpdGVtcyBwYXN0ZWQuJztcbiAgICB9XG4gICAgdGhpcy5pc1Bhc3RlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzUGFzdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnBhc3RlVGV4dCA9ICcnO1xuICAgIH0sIDMwMDApO1xuICAgIHRoaXMuc2hvd0NoaXBzID0gdGhpcy5zZXRTaG93Q2hpcHModGhpcy5jaGlwcyk7XG4gICAgdGhpcy5yZXR1cm5EYXRhKHRoaXMuY2hpcHMpO1xuICAgIHRoaXMuc2hvd0Ryb3Bkcm9wZG93bigpO1xuICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRHJvcGRvd24oc3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGNvbnN0IHNlYXJjaExpbWl0ID0gdGhpcy5zZWFyY2hMaW1pdCA/IHRoaXMuc2VhcmNoTGltaXQgOiAxO1xuICAgIGNvbnN0IGRyb3BMaW1pdCA9IHRoaXMuZHJvcGRvd25MaW1pdCA/IHRoaXMuZHJvcGRvd25MaW1pdCA6IDEwO1xuICAgIGNvbnN0IHNlbGVjdGVkQ2hpcExlbmd0aCA9IHRoaXMuY2hpcHMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuX21heENoaXBzQWxsb3cgIT09IDAgJiYgdGhpcy5fbWF4Q2hpcHNBbGxvdyA8PSBzZWxlY3RlZENoaXBMZW5ndGgpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5kcm9wZG93blZhbHVlLnNsaWNlKDAsIDApO1xuICAgIH0gZWxzZSBpZiAoc3RyTGVuZ3RoID49IHNlYXJjaExpbWl0KSB7XG4gICAgICBsZXQgdGVtcEZpbHRlcjogYW55O1xuICAgICAgc3dpdGNoICh0aGlzLl9zZWFyY2hCeSkge1xuICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgdGVtcEZpbHRlciA9IHRoaXMuZHJvcGRvd25WYWx1ZS5maWx0ZXIoKGUpID0+IGUuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0ci50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID09PSAwKVxuICAgICAgICAgICAgLmZpbHRlcigoZSkgPT4gdGhpcy5jaGlwcy5maWx0ZXIoKHMpID0+IHMuaWQgPT09IGUuaWQpLmxlbmd0aCA8PSAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgIHRlbXBGaWx0ZXIgPSB0aGlzLmRyb3Bkb3duVmFsdWUuZmlsdGVyKChlKSA9PiBlLnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHIudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpXG4gICAgICAgICAgICAuZmlsdGVyKChlKSA9PiB0aGlzLmNoaXBzLmZpbHRlcigocykgPT4gcy5pZCA9PT0gZS5pZCkubGVuZ3RoIDw9IDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRlbXBGaWx0ZXIgPSB0aGlzLmRyb3Bkb3duVmFsdWVcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChlLmlkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHIudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSA9PT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgIChlLnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHIudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLmZpbHRlcigoZSkgPT4gdGhpcy5jaGlwcy5maWx0ZXIoKHMpID0+IHMuaWQgPT09IGUuaWQpLmxlbmd0aCA8PSAwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGVtcEZpbHRlci5zb3J0KFxuICAgICAgICAoYSwgYikgPT4ge1xuICAgICAgICAgIHJldHVybiAoYS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyLnRvTG93ZXJDYXNlKCkpID09PSAwKSA/IC0xIDpcbiAgICAgICAgICAgIChiLmlkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHIudG9Mb3dlckNhc2UoKSkgPT09IDApID8gMSA6IDA7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgICAgLnNsaWNlKDAsIGRyb3BMaW1pdCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9kaXNwbGF5RHJvcGRvd25CeURlZmF1bHQgPT09IHRydWUgJiYgc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuZHJvcGRvd25WYWx1ZS5zbGljZSgwLCBkcm9wTGltaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuZHJvcGRvd25WYWx1ZS5zbGljZSgwLCAwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlSW5wdXQodmFsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fcmVwbGFjZVN0b3AuZmlsdGVyKChtKSA9PiBtID09PSB2YWwpLmxlbmd0aCA+IDAgfHwgKHRoaXMuX21heENoaXBzQWxsb3cgIT09IDAgJiYgdGhpcy5jaGlwcy5sZW5ndGggPj0gdGhpcy5fbWF4Q2hpcHNBbGxvdykpIHtcbiAgICAgIHRoaXMuX3JlYWRvbmx5ID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZENoaXAoZXZlbnQ6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQsIGlucHV0OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBldmVudC5vcHRpb24udmFsdWU7XG4gICAgaWYgKHRoaXMuX3JlcGxhY2VTdG9wLmZpbHRlcigobSkgPT4gbSA9PT0gc2VsZWN0aW9uLmlkKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoaXBzID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmNoaXBzLmZpbHRlcigob2JqKSA9PiBvYmouaWQgPT09IHNlbGVjdGlvbi5pZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNoaXBzLnB1c2goc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgdGhpcy5zaG93Q2hpcHMgPSB0aGlzLnNldFNob3dDaGlwcyh0aGlzLmNoaXBzKTtcbiAgICAvLyAodGhpcy5jaGlwSW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5mb2N1cygpO1xuICAgIC8vIHRoaXMuYXV0b0NvbXBsZXRlQ2hpcExpc3QubWFya0FzUHJpc3RpbmUoKTtcbiAgICAvLyB0aGlzLmRyb3Bkb3duVmFsdWUgPSB0aGlzLmRyb3Bkb3duVmFsdWUuZmlsdGVyKChvYmopID0+IG9iai5pZCAhPT0gc2VsZWN0aW9uLmlkKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIHRoaXMucmV0dXJuRGF0YSh0aGlzLmNoaXBzKTtcbiAgICB0aGlzLnNob3dEcm9wZHJvcGRvd24oKTtcbiAgICB0aGlzLnRvZ2dsZUlucHV0KHNlbGVjdGlvbi5pZCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2hvd0NoaXBzKGNoaXBzOiBhbnlbXSk6IGFueSB7XG4gICAgaWYgKHRoaXMuX21heENoaXBzU2hvdyA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNoaXBzO1xuICAgIH1cbiAgICB0aGlzLnN0YXJ0SW5kZXggPSAoY2hpcHMubGVuZ3RoID4gdGhpcy5fbWF4Q2hpcHNTaG93KSA/XG4gICAgICAoY2hpcHMubGVuZ3RoIC0gdGhpcy5fbWF4Q2hpcHNTaG93KSA6IDA7XG4gICAgdGhpcy5pc1Nob3dNb3JlVmlzaWJsZSA9IHRoaXMuc3RhcnRJbmRleCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgcmV0dXJuIGNoaXBzLnNsaWNlKHRoaXMuc3RhcnRJbmRleCk7XG4gIH1cbiBcbiAgcHVibGljIHJlbW92ZUNoaXAoY2hpcDogYW55LCAgZGVsZXRlVHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJkeGMgYXV0byByZW1vdmUgY2FsbFwiKTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpcHMuaW5kZXhPZihjaGlwKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuY2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgLy8gaWYgKCFjaGlwLmlzVW5hdmFsaWFibGUpIHtcbiAgICAgICAgLy8gICB0aGlzLmRyb3Bkb3duVmFsdWUucHVzaChjaGlwKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnNob3dDaGlwcyA9IHRoaXMuc2V0U2hvd0NoaXBzKHRoaXMuY2hpcHMpO1xuICAgICAgICAodGhpcy5jaGlwSW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5mb2N1cygpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXR1cm5EYXRhKHRoaXMuY2hpcHMpO1xuICAgICAgdGhpcy5zaG93RHJvcGRyb3Bkb3duKCk7XG4gICAgICBpZiAodGhpcy5jaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbG9zZUFsbENoaXBzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnRvZ2dsZUlucHV0KCcnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmV0dXJuRGF0YSh2YWx1ZSkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ2hpcHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoaXAgb2YgdmFsdWUpIHtcbiAgICAgIHNlbGVjdGVkQ2hpcHMucHVzaChjaGlwLmlkKTtcbiAgICB9XG4gICAgdGhpcy52YWxpZGF0ZUFsbENoaXBzKCk7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2Uoc2VsZWN0ZWRDaGlwcyk7XG4gIH1cblxuICBwdWJsaWMgRm9yRWRpdENvbnRyb2wodmFsdWUpIHtcbiAgICBpZiAoKHZhbHVlICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLmxlbmd0aCA+PSAxKSAmJlxuICAgICAgKHRoaXMuY2hpcHMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmNoaXBzLmxlbmd0aCA8IDEpKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25WYWx1ZS5maWx0ZXIoKG9iaikgPT4gb2JqLmlkID09PSBpdGVtKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdmFsQ2hpcCA9IHRoaXMuZHJvcGRvd25WYWx1ZS5maWx0ZXIoKG9iaikgPT4gb2JqLmlkID09PSBpdGVtKTtcbiAgICAgICAgICB0aGlzLmNoaXBzLnB1c2godmFsQ2hpcFswXSk7XG4gICAgICAgICAgLy8gdGhpcy5kcm9wZG93blZhbHVlID0gdGhpcy5kcm9wZG93blZhbHVlLmZpbHRlcigob2JqKSA9PiBvYmouaWQgIT09IGl0ZW0pO1xuICAgICAgICAgIHRoaXMudG9nZ2xlSW5wdXQoaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmFsQ2hpcCA9IHtcbiAgICAgICAgICAgIGlkOiBpdGVtLFxuICAgICAgICAgICAgZGlzcGxheVRleHQ6ICcnLFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW0sXG4gICAgICAgICAgICBpc1VuYXZhbGlhYmxlOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmNoaXBzLnB1c2godmFsQ2hpcCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVJbnB1dChpdGVtKTtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oaXRlbSArICcgbWlzc2luZyBpbiBzdWdnZXN0aW9uIGRyb3Bkb3duLiBDYW5ub3QgYmUgcmV0cml2ZWQgaWYgZGVsZXRlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNob3dDaGlwcyA9IHRoaXMuc2V0U2hvd0NoaXBzKHRoaXMuY2hpcHMpO1xuICAgIH1cbiAgICAvLyB0aGlzLnJldHVybkRhdGEodGhpcy5jaGlwcyk7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGVBbGxDaGlwcygpIHtcbiAgICB0aGlzLmF1dG9Db21wbGV0ZUNoaXBMaXN0LnNldEVycm9ycyhudWxsKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLl9yZXF1aXJlZCAmJiB0aGlzLmNoaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmlzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZUNoaXBMaXN0LnNldEVycm9ycyh7IHJlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdSZXF1aXJlZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzRXJyb3IgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoaXBzLmZpbHRlcigob2JqKSA9PiBvYmouaXNVbmF2YWxpYWJsZSkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmlzSW52YWxpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlQ2hpcExpc3Quc2V0RXJyb3JzKHsgaW52YWxpZDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnSW52YWxpZCBJdGVtKHMpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNJbnZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlQ2hpcExpc3QuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93QWxsQ2hpcHMoKSB7XG4gICAvKiBjb25zdCBzdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAuY29ubmVjdGVkVG8oXG4gICAgICAgIHRoaXMuYWRkQ29uZGl0aW9uT3JpZ2luLmVsZW1lbnRSZWYsXG4gICAgICAgIHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSk7Ki9cblxuICAgICAgY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5hZGRDb25kaXRpb25PcmlnaW4uZWxlbWVudFJlZilcbiAgICAgIC53aXRoUG9zaXRpb25zKFt7XG4gICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxuICAgICAgfSwge1xuICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcbiAgICAgIH1dKTtcblxuICAgICAvKiBjb25zdCBzdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuYWRkQ29uZGl0aW9uT3JpZ2luLmVsZW1lbnRSZWYpXG4gICAgICAgIC53aXRoUG9zaXRpb25zKFt7XG4gICAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgICAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgICAgfV0pOyAqL1xuXG4gICAgY29uc3QgY29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxuICAgICAgcG9zaXRpb25TdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICB3aWR0aDogdGhpcy5jaGlwUGFyZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICB9KTtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLmFkZENvbmRpdGlvblRlbXBsYXRlKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCkpO1xuICAgIHRoaXMub3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIC8vIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5jbG9zZUFsbENoaXBzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VBbGxDaGlwcygpIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICAodGhpcy5jaGlwSW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93RHJvcGRyb3Bkb3duKCkge1xuICAgIGlmICh0aGlzLl9kaXNwbGF5RHJvcGRvd25CeURlZmF1bHQgJiYgdGhpcy5fZGlzcGxheURyb3Bkb3duQnlEZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBkcm9wTGltaXQgPSB0aGlzLmRyb3Bkb3duTGltaXQgPyB0aGlzLmRyb3Bkb3duTGltaXQgOiAxMDtcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5kcm9wZG93blZhbHVlLnNsaWNlKDAsIHRoaXMuX2Ryb3Bkb3duTGltaXQpO1xuICAgICAgLy8gKHRoaXMuY2hpcElucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjwhLS1cbiAgICBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAgICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbi0tPlxuXG48Zm9ybSBjbGFzcz1cImR4Yy1jaGlwLWF1dG9jb21wbGV0ZVwiPlxuXHQ8bWF0LWZvcm0tZmllbGQgI2NoaXBwYXJlbnQgW2NsYXNzLm1hdC1jaGlwLWZvcm0tZmllbGQtaW52YWxpZF09XCIhIShhdXRvQ29tcGxldGVDaGlwTGlzdCAmJiBhdXRvQ29tcGxldGVDaGlwTGlzdC5pbnZhbGlkICYmIChhdXRvQ29tcGxldGVDaGlwTGlzdC50b3VjaGVkIHx8IChfcGFyZW50Rm9ybUdyb3VwICYmIF9wYXJlbnRGb3JtR3JvdXAuc3VibWl0dGVkKSkpXCI+XG5cdFx0PG1hdC1sYWJlbD57e3BsYWNlaG9sZGVyfX08L21hdC1sYWJlbD5cblx0XHQ8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgY2xhc3M9XCJkeGMtY2hpcHNcIiA+XG5cdFx0XHQ8bWF0LWNoaXAgY2xhc3M9XCIgbWF0LXN0YW5kYXJkLWNoaXAgbWF0LWNoaXAtc2VsZWN0ZWRcIiBzZWxlY3RlZD1cInRydWVcIiAqbmdGb3I9XCJsZXQgY2hpcCBvZiBzaG93Q2hpcHNcIiBbc2VsZWN0YWJsZV09XCJzZWxlY3RhYmxlXCIgW2NvbG9yXT1cImNoaXAuaXNVbmF2YWxpYWJsZSA/ICd3YXJuJzonbm9ybWFsJ1wiIFtyZW1vdmFibGVdPVwicmVtb3ZhYmxlXCIgKHJlbW92ZWQpPVwicmVtb3ZlQ2hpcChjaGlwKVwiPlxuXHRcdFx0XHR7e2NoaXAuZGlzcGxheVRleHQgfHwgY2hpcC5pZH19IFxuXHRcdFx0XHQ8bWF0LWljb24gbWF0Q2hpcFJlbW92ZSAqbmdJZj1cInJlbW92YWJsZSAmJiAhZGlzYWJsZWRcIj5jYW5jZWw8L21hdC1pY29uPlx0XHRcdFx0XG5cdFx0XHQ8L21hdC1jaGlwPlxuXHRcdFx0PGlucHV0IG1hdElucHV0IFtyZWFkb25seV09XCJyZWFkb25seVwiICNjaGlwSW5wdXQgY2xhc3M9XCJhdXRvSW5wdXRcIiBcblx0XHRcdFx0W21hdENoaXBJbnB1dEZvcl09XCJjaGlwTGlzdFwiXG5cdFx0XHRcdFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiIFxuXHRcdFx0XHRbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cImFkZE9uQmx1clwiIFxuXHRcdFx0XHRbZm9ybUNvbnRyb2xdPVwiYXV0b0NvbXBsZXRlQ2hpcExpc3RcIiBcblx0XHRcdFx0KGJsdXIpPVwiY2xlYXJPbkJsdXIoKVwiIChmb2N1cyk9XCJ1cGRhdGVEcm9wZG93bignJylcIiAocGFzdGUpPVwib25QYXN0ZSgkZXZlbnQpXCIvPlxuXHRcdDwvbWF0LWNoaXAtbGlzdD5cblx0XHQ8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiIChvcHRpb25TZWxlY3RlZCk9XCJhZGRDaGlwKCRldmVudCwgY2hpcElucHV0KVwiPlxuXHRcdFx0PG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWx0ZXJlZE9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uXCI+XG5cdFx0XHRcdDxzcGFuPnt7b3B0aW9uLnZhbHVlfX08L3NwYW4+XG5cdFx0XHQ8L21hdC1vcHRpb24+XG5cdFx0PC9tYXQtYXV0b2NvbXBsZXRlPlxuXHRcdDxidXR0b24gY2RrLW92ZXJsYXktb3JpZ2luICNhZGRDb25kaXRpb25PcmlnaW49XCJjZGtPdmVybGF5T3JpZ2luXCIgW3N0eWxlLmRpc3BsYXldPVwiaXNTaG93TW9yZVZpc2libGU/J2Jsb2NrJzonbm9uZSdcIiBtYXRTdWZmaXhcblx0XHQgICAgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJzaG93QWxsQ2hpcHMoKVwiPlxuXHRcdFx0PG1hdC1pY29uIGFyaWEtbGFiZWw9XCJzaG93IGFsbFwiPm1vcmVfaG9yaXo8L21hdC1pY29uPlxuXHRcdDwvYnV0dG9uPlxuXG5cdFx0PG5nLXRlbXBsYXRlIGNkay1wb3J0YWwgI2FkZENvbmRpdGlvblRlbXBsYXRlPVwiY2RrUG9ydGFsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZHhjLWNoaXAtYXV0b2NvbXBsZXRlIG1hdC1lbGV2YXRpb24tejggZHhjLW1vcmUtY2hpcHNcIj5cblx0XHRcdFx0PG1hdC1jaGlwLWxpc3QgI2NoaXBMaXN0PlxuXHRcdFx0XHRcdDxtYXQtY2hpcCBjbGFzcz1cIiBtYXQtc3RhbmRhcmQtY2hpcCBtYXQtY2hpcC1zZWxlY3RlZFwiIHNlbGVjdGVkPVwidHJ1ZVwiICpuZ0Zvcj1cImxldCBjaGlwIG9mIGNoaXBzO2xldCBpID0gaW5kZXhcIiBbc2VsZWN0YWJsZV09XCJmYWxzZVwiIFtjb2xvcl09XCJjaGlwLmlzVW5hdmFsaWFibGUgPyAnd2Fybic6J25vcm1hbCdcIiBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiIChyZW1vdmVkKT1cInJlbW92ZUNoaXAoY2hpcClcIj5cblx0XHRcdFx0XHRcdHt7Y2hpcC5kaXNwbGF5VGV4dCB8fCBjaGlwLmlkfX1cblx0XHRcdFx0XHRcdDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlICpuZ0lmPVwicmVtb3ZhYmxlICYmICFkaXNhYmxlZFwiPmNhbmNlbDwvbWF0LWljb24+XG5cdFx0XHRcdFx0PC9tYXQtY2hpcD5cblx0XHRcdFx0PC9tYXQtY2hpcC1saXN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bWF0LWhpbnQgKm5nSWY9XCJtYXhDaGlwc0FsbG93ID4gMFwiIGFsaWduPVwiZW5kXCI+e3tjaGlwcy5sZW5ndGh9fS97e21heENoaXBzQWxsb3d9fTwvbWF0LWhpbnQ+XG5cdFx0PG1hdC1oaW50ICpuZ0lmPVwiaXNQYXN0ZWRcIj57e3Bhc3RlVGV4dH19PC9tYXQtaGludD5cblx0XHQ8bWF0LWhpbnQgKm5nSWY9XCJoaW50ICYmICFpc0ludmFsaWQgJiYgIWlzRXJyb3IgJiYgIWlzUGFzdGVkXCI+e3toaW50fX08L21hdC1oaW50PlxuXHRcdDwhLS0gPG1hdC1oaW50ICpuZ0lmPVwidGVtcEhpbnQgJiYgIWlzSW52YWxpZFwiIGFsaWduPVwic3RhcnRcIiBjbGFzcz1cImVycm9yaGlnaGxpZ2h0XCI+e3tlcnJvck1lc3NhZ2V9fTwvbWF0LWhpbnQ+IC0tPlxuXHRcdDxtYXQtaGludCBjbGFzcz1cIm1hdC1lcnJvclwiICpuZ0lmPVwiIWlzUGFzdGVkICYmICEhKGF1dG9Db21wbGV0ZUNoaXBMaXN0ICYmIGF1dG9Db21wbGV0ZUNoaXBMaXN0LmludmFsaWQgJiYgKGF1dG9Db21wbGV0ZUNoaXBMaXN0LnRvdWNoZWQgfHwgKF9wYXJlbnRGb3JtR3JvdXAgJiYgX3BhcmVudEZvcm1Hcm91cC5zdWJtaXR0ZWQpKSlcIj57e2Vycm9yTWVzc2FnZX19PC9tYXQtaGludD5cblx0XHQ8IS0tIDxtYXQtaGludCBjbGFzcz1cIm1hdC1lcnJvclwiICpuZ0lmPVwiYXV0b0NvbXBsZXRlQ2hpcExpc3QuaGFzRXJyb3IoJ2ludmFsaWQnKVwiPkludmFsaWQgY2hpcChzKTwvbWF0LWhpbnQ+IC0tPlxuXHQ8L21hdC1mb3JtLWZpZWxkPlxuXHRcbjwvZm9ybT4iXX0=