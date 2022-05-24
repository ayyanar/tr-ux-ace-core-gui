/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import {
  Component, EventEmitter, Output, Input, OnInit, AfterViewInit,
  ViewEncapsulation, ElementRef, OnChanges, forwardRef, ViewChild, ChangeDetectionStrategy, DoCheck, Optional, Host, SkipSelf, OnDestroy, NgIterable
} from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, ValidationErrors, NG_VALIDATORS, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger
} from '@angular/material/autocomplete';
import {
  MatChipInputEvent
} from '@angular/material/chips';
import { Observable, of, SubscriptionLike } from 'rxjs';
import { CdkOverlayOrigin, OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

// tslint:disable:no-forward-ref
// tslint:disable:no-empty
@Component({
  selector: 'dxc-chip-autocomplete',
  templateUrl: 'dxc-chip-autocomplete.component.html',
  styleUrls: ['dxc-chip-autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
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
  ]
})

export class DxcChipAutocompleteComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges, DoCheck, ControlValueAccessor, Validator {

  @Input() public placeholder: string;
  @Input() public hint: string;

  // chip-input form control
  public autoCompleteChipList: FormControl = new FormControl('');

  // mat-chip properties
  public visible: boolean = true;
  public selectable: boolean = true;
  public removable: boolean = true;
  public addOnBlur: boolean = true;
  public isShowMoreVisible: boolean = false;
  public disabled: boolean = false;
  public filteredOptions: Observable<any[]>;
  // public filteredOptions: NgIterable<any>; //newcode
  public chips: any = [];
  public showChips = [];
  public isInvalid: boolean = false;
  public isError: boolean = false;
  public errorMessage = '';

  public isPasted: boolean = false;
  public pasteText: string = '';

  private overlayRef: OverlayRef;
  private dropdownValue: any = [];
  private startIndex: number = 0;

  private _dropdownList: any = [];
  private _dropdownLimit: number = 0;
  private _searchLimit: number = 0;
  private _displayDropdownByDefault: boolean = false;
  private _maxChipsAllow: number = 0;
  private _maxChipsShow: number = 0;
  private _replaceStop: string[] = ['***'];
  private _required: boolean = false;
  private _readonly: boolean = false;
  private _searchBy: 'id' | 'value' | 'all' = 'all';

  private ddlSubscription: SubscriptionLike;
  private controlSubscription: SubscriptionLike;
  @Input()
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }
  get required(): boolean {
    return this._required;
  }

  @Input()
  set readonly(value: boolean) {
    this._readonly = coerceBooleanProperty(value);
  }
  get readonly(): boolean {
    return this._readonly;
  }

  @Input('dropdownList')
  set dropdownList(obs: Observable<any>) {
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

  @Input('dropdownLimit')
  set dropdownLimit(value: number) {
    this._dropdownLimit = value;
  }
  get dropdownLimit(): number {
    return this._dropdownLimit;
  }

  @Input('searchLimit')
  set searchLimit(value: number) {
    this._searchLimit = value;
  }
  get searchLimit(): number {
    return this._searchLimit;
  }

  @Input()
  set displayDropdownByDefault(value: boolean) {
    this._displayDropdownByDefault = coerceBooleanProperty(value);
  }
  get displayDropdownByDefault(): boolean {
    return this._displayDropdownByDefault;
  }

  @Input('maxChipsAllow')
  set maxChipsAllow(value: number) {
    this._maxChipsAllow = value;
    if (value !== 0 && this._maxChipsShow > value) {
      throw new Error('maxChipsShow should be lesser than or equal to maxChipsAllow');
    }
  }
  get maxChipsAllow(): number {
    return this._maxChipsAllow;
  }

  @Input('maxChipsShow')
  set maxChipsShow(value: number) {
    this._maxChipsShow = value;
    if (this._maxChipsAllow !== 0 && value > this._maxChipsAllow) {
      throw new Error('maxChipsShow should be lesser than or equal to maxChipsAllow');
    }
  }
  get maxChipsShow(): number {
    return this._maxChipsShow;
  }

  @Input('replaceStop')
  set replaceStop(value: string | string[]) {
    if (typeof value === 'string') {
      this._replaceStop = [value];
    } else {
      this._replaceStop = value;
    }
  }

  @Input('searchBy')
  set searchBy(value: 'id' | 'value' | 'all') {
    this._searchBy = value;
  }
  get searchBy(): 'id' | 'value' | 'all' {
    return this._searchBy;
  }

  @ViewChild('addConditionOrigin') private addConditionOrigin: CdkOverlayOrigin;
  @ViewChild('addConditionTemplate') private addConditionTemplate: CdkPortal;
  @ViewChild('chipparent', { read: ElementRef }) private chipParent: ElementRef;
  @ViewChild('chipInput') private chipInput: ElementRef;

  public constructor(
    private elRef: ElementRef,
    public overlay: Overlay,
    @Optional() public _parentFormGroup: FormGroupDirective
  ) { }

  public propagateChange: any = () => {
  }

  public ngOnInit() {
    this.showDropdropdown(); // newcode
    this.controlSubscription = this.autoCompleteChipList.valueChanges.pipe(debounceTime(300)).subscribe(
      (val) => {
        if (val) {
          this.updateDropdown(val);
        }
      }
    );
  }

  public ngOnChanges() {
    this.returnData(this.chips);
  }

  public ngDoCheck(): void {
    this.returnData(this.chips);
  }

  public ngOnDestroy(): void {
    this._dropdownList = [];
    this.dropdownValue = [];
    if ( this.ddlSubscription) {
      this.ddlSubscription.unsubscribe();
    }
    if (this.controlSubscription) {
      this.controlSubscription.unsubscribe();
    }   
  }

  public registerOnValidatorChange?(fn: () => void): void {
  }

  public validate(c: FormControl): ValidationErrors {
    const errors = [];
    if (this.isInvalid) {
      return ({ parseError: true });
    }
    return null;
  }

  public writeValue(obj): void {
    this.chips = [];
    this.showChips = this.setShowChips(this.chips);
    if (this.chipInput) { // newcode
      (this.chipInput.nativeElement as HTMLInputElement).value = '';
    }
  
    this.autoCompleteChipList.reset();
    this.dropdownValue = this._dropdownList;
    this.updateDropdown('');
    this.toggleInput('');
    this.ForEditControl(obj);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (isDisabled) {
      this.autoCompleteChipList.disable();
      console.log('disabled');
    } else {
      this.autoCompleteChipList.enable();
      console.log('enabled');
    }
  }

  public clearOnBlur() {
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
    (this.chipInput.nativeElement as HTMLInputElement).value = '';
    this.validateAllChips();
    // this.autoCompleteChipList.reset();
  }

  public onPaste(event: ClipboardEvent) {
    if (!this.disabled && !this.readonly) {
    const pastedItems = event.clipboardData.getData('Text').split(/[.]|[,]|[\s]|[\r]|[\n]/).filter((value) => value.trim() !== '');
    let i = 0;
    for (const item of pastedItems) {
      let chipValue = [];
      chipValue = this.dropdownValue.filter(
        (obj) => obj.id.toLowerCase() === item.trim().toLowerCase()
      );
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
      } else {
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

  public ngAfterViewInit() {
  }

  public updateDropdown(str: string) {
    const strLength = str.length;
    const searchLimit = this.searchLimit ? this.searchLimit : 1;
    const dropLimit = this.dropdownLimit ? this.dropdownLimit : 10;
    const selectedChipLength = this.chips.length;

    if (this._maxChipsAllow !== 0 && this._maxChipsAllow <= selectedChipLength) {
      this.filteredOptions = this.dropdownValue.slice(0, 0);
    } else if (strLength >= searchLimit) {
      let tempFilter: any;
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
            .filter(
              (e) => {
                return (e.id.toLowerCase().indexOf(str.toString().toLowerCase()) === 0) ||
                  (e.value.toLowerCase().indexOf(str.toString().toLowerCase()) !== -1);
              }
            ).filter((e) => this.chips.filter((s) => s.id === e.id).length <= 0);
      }
      this.filteredOptions = tempFilter.sort(
        (a, b) => {
          return (a.id.toLowerCase().indexOf(str.toLowerCase()) === 0) ? -1 :
            (b.id.toLowerCase().indexOf(str.toLowerCase()) === 0) ? 1 : 0;
        }
      )
        .slice(0, dropLimit);
    } else if (this._displayDropdownByDefault === true && strLength === 0) {
      this.filteredOptions = this.dropdownValue.slice(0, dropLimit);
    } else {
      this.filteredOptions = this.dropdownValue.slice(0, 0);
    }
  }

  public toggleInput(val: string): boolean {
    if (this._replaceStop.filter((m) => m === val).length > 0 || (this._maxChipsAllow !== 0 && this.chips.length >= this._maxChipsAllow)) {
      this._readonly = true;
      return false;
    } else {
      this.readonly = false;
      return true;
    }
  }

  public addChip(event: MatAutocompleteSelectedEvent, input: any): void {
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

  public setShowChips(chips: any[]): any {
    if (this._maxChipsShow === 0) {
      return chips;
    }
    this.startIndex = (chips.length > this._maxChipsShow) ?
      (chips.length - this._maxChipsShow) : 0;
    this.isShowMoreVisible = this.startIndex > 0 ? true : false;
    return chips.slice(this.startIndex);
  }
 
  public removeChip(chip: any,  deleteType: string): void {
    console.log("dxc auto remove call");
    const index = this.chips.indexOf(chip);
    if (!this.disabled) {
      if (index >= 0) {
        this.chips.splice(index, 1);
        // if (!chip.isUnavaliable) {
        //   this.dropdownValue.push(chip);
        // }
        this.showChips = this.setShowChips(this.chips);
        (this.chipInput.nativeElement as HTMLInputElement).focus();
      }
      this.returnData(this.chips);
      this.showDropdropdown();
      if (this.chips.length === 0) {
        this.closeAllChips();
      }
      this.toggleInput('');
    }
  }

  public returnData(value) {
    const selectedChips = [];
    for (const chip of value) {
      selectedChips.push(chip.id);
    }
    this.validateAllChips();
    this.propagateChange(selectedChips);
  }

  public ForEditControl(value) {
    if ((value && value !== null && value.length >= 1) &&
      (this.chips === undefined || this.chips.length < 1)) {
      for (const item of value) {
        if (this.dropdownValue.filter((obj) => obj.id === item).length > 0) {
          const valChip = this.dropdownValue.filter((obj) => obj.id === item);
          this.chips.push(valChip[0]);
          // this.dropdownValue = this.dropdownValue.filter((obj) => obj.id !== item);
          this.toggleInput(item);
        } else {
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

  public validateAllChips() {
    this.autoCompleteChipList.setErrors(null);
    if (!this.disabled) {
      if (this._required && this.chips.length === 0) {
        this.isError = true;
        this.autoCompleteChipList.setErrors({ required: true });
        this.errorMessage = 'Required';
      } else {
        this.isError = false;
      }
      if (this.chips.filter((obj) => obj.isUnavaliable).length > 0) {
        this.isInvalid = true;
        this.autoCompleteChipList.setErrors({ invalid: true });
        this.errorMessage = 'Invalid Item(s)';
      } else {
        this.isInvalid = false;
      }
    } else {
      this.autoCompleteChipList.disable();
    }
  }

  public showAllChips() {
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
    this.overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        // this.overlayRef.detach();
        this.closeAllChips();
      }
    });
  }

  public closeAllChips() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      (this.chipInput.nativeElement as HTMLInputElement).focus();
    }
  }

  public showDropdropdown() {
    if (this._displayDropdownByDefault && this._displayDropdownByDefault === true) {
      const dropLimit = this.dropdownLimit ? this.dropdownLimit : 10;
      this.filteredOptions = this.dropdownValue.slice(0, this._dropdownLimit);
      // (this.chipInput.nativeElement as HTMLInputElement).focus();
    }
  }
}
