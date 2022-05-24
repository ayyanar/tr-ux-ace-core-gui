/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  public selectedTheme: any ={ name: 'Default Theme', value: 'default-theme' };
  public themes:any[] = [
    {
      name: 'Default Theme',
      value: 'default-theme'
    },
    {
      name: 'COPA Theme',
      value: 'copa-theme'
    }
  ]

  constructor() {}

  public ngOnInit() {}

  public logoclick() {
    window.alert('hellooo');
  }

  public onThemeChange(theme){
    this.selectedTheme = theme;
  }
}
