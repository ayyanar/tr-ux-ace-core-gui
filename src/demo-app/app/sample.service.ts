/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as airportData from './airport.json';
import * as segmentTypes from './segmenttypes.json';

@Injectable()
export class SampleService {
 // private JSON_URL: string = './src/demo-app/app/airport.json';
  //private ST_JSON_URL: string = './src/demo-app/app/segmenttypes.json';

  private JSON_URL: string = './airport.json';
  private ST_JSON_URL: string = './segmenttypes.json';

  constructor(private http: HttpClient) { }
  public getAirportJson() {
    return airportData;
   // return this.http.get(this.JSON_URL);
  }
  public getSegmentTypeJson() {
    return segmentTypes;
   // return this.http.get(this.ST_JSON_URL);
  }
}
