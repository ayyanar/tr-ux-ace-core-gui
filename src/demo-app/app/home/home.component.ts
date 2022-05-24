/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { SampleService } from './../sample.service';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';

import { DxcNav, MessageService, DialogsService } from 'core-lib';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { PopupDialogComponent } from './popup-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
// import { forEach } from '@angular/router/src/utils/collection';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sample: any[] = [
    {
      name: 'menu1',
      children: [
        {
          name: 'childmenu1'
        },{
          name: 'childmenu2'
        },{
          name: 'childmenu3'
        },
      ]
    },{
      name: 'menu2',
      children: [
        {
          name: 'childmenu4'
        },{
          name: 'childmenu5'
        },{
          name: 'childmenu6'
        },
      ]
    },
  ];

  public navItems: DxcNav[] = [
    { Name: 'Directory', Link: ['sample'] }, 
    { Name: 'Table', Link: ['/home'] },
    { Name: 'Groups', Link: [] },
    { Name: 'Market Search & reports', Link: ['/rulereport'] }
  ];
  public listOfAirport: any = [];
  public listOfSegType: any = [];
  public sampleFrm: FormGroup;
  public isVertical = false;
  public isDisabled = false;
  public someValue: any;
  public someValue1: any;
  public someValue2: any;
  public favoritePie: string[] = ['A'];
  public pieOptions = ['A', 'D', 'C', 'D', 'EF', 'GH'];
  public displayedColumns = ['position', 'name', 'weight', 'symbol'];
  public dataSource = ELEMENT_DATA;
  public selected:string = 'true';

  public placeholder: string = 'Keyword(s)';

  @ViewChild('rulename') private rulename: ElementRef;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private dialogService: DialogsService,
    private sampleService: SampleService
  ) {
    this.getAirportData();
    this.getSegmentTypeData();
    this.sampleFrm = this.fb.group({
      inputCtrl: [{value: '', disabled: true}],
      somevalue: [{ value: ['HOSTOP'], disabled: false }],
      somevalue2: [{ value: ['UTK','FIV','FAK','BWS','WKK','TSS','FOB','ABP','ALV','ADC','TJP','AEE','AEI',
      'AEK','OLR','AFR','AFT','ATD','VEV','GEF','AGG','AKS','BAS','FRE','HIR','MBU','IRA','SCZ','MUA','GZO',
      'MNY','PRS','OTV','RNL','EGM','RUS','VAO','AGK','KGE','AGL','RIN','RBV','AHT','AHY','AIE','AIH'], disabled: false },[Validators.required]],
      somevalue3: [{ value: ['***'], disabled: false }],
      somevaluex: [{value:['IAH', '123', 'SFO', '456', 'NYC'], disabled: false} , [Validators.required]
      ]
    });
  }

  public ngOnInit() {
    console.log('hello `Home` component');
    console.log('FormValid:', this.sampleFrm.get('somevalue').invalid);
    this.messageService.error(
      'Bad Request. Unable to retrive valid response from server',
      true
    );
    this.messageService.warn('The data retrived may be incomplete', true);
    this.messageService.success('The rule has been activated', true);
    this.messageService.info('The rule has been activated', true);

    this.someValue2 = ['IAH', 'IFP', 'SFO', 'HKG', 'NYC'];
    this.someValue2 = '';
}

public singleValue(control: FormControl) { 
  const myvalues: string[] = control.value;
  if (myvalues.filter( (m) => (m === 'IAH' || m === 'LAX' )).length > 0) {
    control.setValue([myvalues[myvalues.length - 1]]);
    return null;
  }
  return null;
}

  public getAirportData() {
    let res = this.sampleService.getAirportJson();
    this.listOfAirport = [];
    const result: any = res;
    let airportCodes = '';
    result.airport.forEach((air) => {
      airportCodes += '\'' + air.iata + '\',';
      this.listOfAirport.push({
        id: air.iata,
        displayText: air.iata,
        value: air.name ? air.name : air.iata
      });
    });
    console.log(airportCodes);

    /*this.sampleService.getAirportJson().subscribe((res) => {
        this.listOfAirport = [];
        const result: any = res;
        let airportCodes = '';
        result.airport.forEach((air) => {
          airportCodes += '\'' + air.iata + '\',';
          this.listOfAirport.push({
            id: air.iata,
            displayText: air.iata,
            value: air.name ? air.name : air.iata
          });
        });
        console.log(airportCodes);
    });*/
  }

  public getSegmentTypeData() { //newcode
    let res = this.sampleService.getSegmentTypeJson();
    this.listOfSegType = [];
    const result: any = res;
    let airportCodes = '';
    result.airport.forEach((air) => {
      airportCodes += '\'' + air.iata + '\',';
      this.listOfSegType.push({
        id: air.iata,
        displayText: air.iata,
        value: air.name ? air.name : air.iata
      });
    });
    console.log(airportCodes);

   /* this.sampleService.getSegmentTypeJson().subscribe((res) => {
        this.listOfSegType = [];
        const result: any = res;
        let airportCodes = '';
        result.airport.forEach((air) => {
          airportCodes += '\'' + air.iata + '\',';
          this.listOfSegType.push({
            id: air.iata,
            displayText: air.iata,
            value: air.name ? air.name : air.iata
          });
        });
        console.log(airportCodes);
    });*/
  }

  public navigate(args) {
    console.log(args);
  }

  public openDialog(): void {
    this.dialogService.confirm(
      'Confirm Dialog',
      'Helloo!! This is a confirm message'
    );
  }

  public clearForm() {
    console.log(this.sampleFrm);
    // this.sampleFrm.reset();
    // (this.rulename.nativeElement as HTMLInputElement).value = '';
  }
  public submitForm() {
   // console.log(this.sampleFrm.controls.somevalue.errors);
    this.placeholder = 'helloooo';
    if(this.sampleFrm.invalid) {
      this.messageService.error('Error in Chip Autocomplete');
    }
  }
}
