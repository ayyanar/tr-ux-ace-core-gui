/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulereportComponent } from './rulereport';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home',  component: HomeComponent},
  { path: 'rulereport',  component: RulereportComponent },
  { path: '**',  redirectTo: '.' , pathMatch: 'full'  },
//   { path: 'detail', loadChildren: './+detail#DetailModule'},
//   { path: '**',    component: NoContentComponent },
];
