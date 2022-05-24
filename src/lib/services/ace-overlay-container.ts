/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Injectable, OnDestroy } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable()
export class AceOverlayContainer extends OverlayContainer {

  
  public override _createContainer(): void {
    const container = document.createElement('div');
    container.classList.add('cdk-overlay-container');

    document.querySelector('.ace-app-container').appendChild(container);
    this._containerElement = container;
  }
}
