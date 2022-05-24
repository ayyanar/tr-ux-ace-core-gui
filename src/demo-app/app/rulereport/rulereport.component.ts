/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */


import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';

import {  DialogsService } from 'core-lib';
import { MessageService } from 'core-lib';
import { DxcNav } from 'core-lib';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


export interface Rules {
  ruleid: number;
  version: number;
  order: number;
  name: string;
  type: string;
  status: string;
  executed: boolean;
}

const ELEMENT_DATA: Rules[] = [
  {ruleid: 37, version: 1, order: 1, name: 'Bid price adjust 2', type: 'Bid Price Adjustment',status: 'Active',executed:true},
  {ruleid: 40, version: 1, order: 2, name: 'Bid price adjust', type: 'Bid Price Adjustment',status: 'Active',executed:false},
  {ruleid: 41, version: 6, order: 3, name: 'Set bid price for last 10 GSA', type: 'Bid Price Adjustment',status: 'Simulate',executed:true},
  {ruleid: 45, version: 1, order: 4, name: 'Set bid price for Y cabin to Boston based on Load factor', type: 'Bid Price Adjustment',status: 'Active',executed:true},
  {ruleid: 46, version: 2, order: 5, name: 'Min bid price 250 EZE SXM', type: 'Bid Price Adjustment',status: 'Active',executed:false},
  {ruleid: 50, version: 1, order: 6, name: 'Minimum bid price to BAQ', type: 'Bid Price Adjustment',status: 'Active',executed:true}
];

@Component({
  selector: 'rulereport',
  templateUrl: './rulereport.component.html',
  styleUrls: ['./rulereport.component.scss']
})
export class RulereportComponent implements OnInit {
  public navItems: DxcNav[] = [
    { Name: 'Directory', Link: ['/'] },
    { Name: 'Table', Link: ['/home'] },
    { Name: 'Groups', Link: ['/'] },
    { Name: 'Market Search & reports', Link: ['/rulereport'] }
  ];
  links = ['Market Search', 'Seat Calculation', 'Base Fare','Bid Price','Rules Report'];
  activeLink = this.links[4];

  ruleTypeLinks = ['Jouney Data Control Exception','Market Fare','Bid Price Adjustment','Availability Adjustment','Class Closure','Class Supression','Allow Partial Cancelation']
  ruleTypeActiveLink = this.ruleTypeLinks[2];

  legLinks = ['TGU > SFO','SFO > PTY','PTY > MIA','O&D:TGU > MIA']
  legActiveLink = this.legLinks[0];

  cabinClasses = [
    {
      classname: 'Bussiness',
      code: 'Y',
      bookingClasses: ['C','P','J','Z','I','R']
    },
    {
      classname: 'Economy',
      code: 'C',
      bookingClasses:['Y','G','B','M','H','Q','K','F','U','S','O','W','E','L','T','A','N','X']
    }
  ]

  public listOfAirport: any = [];
  public sampleFrm: FormGroup;
  public isVertical = false;
  public isDisabled = false;
  public someValue: any;
  public someValue1: any;
  public someValue2: any;
  public favoritePie: string[] = ['A'];
  public pieOptions = ['A', 'D', 'C', 'D', 'EF', 'GH'];
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<Rules> ;
  show: boolean = true;

  @ViewChild('rulename') private rulename: ElementRef;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private dialogService: DialogsService
  ) {

  }

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.messageService.error('Bad Request. Unable to retrive valid response from server', true);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  public toggleShow(){
    this.show = !this.show;
  }

}
