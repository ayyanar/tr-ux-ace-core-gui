/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Observable } from 'rxjs';
import { Pipe, OnDestroy, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Pipe({name: 'myObservable', pure: false})
export class ObservablePipe implements OnDestroy, PipeTransform {

  private subject: BehaviorSubject<any> = new BehaviorSubject(null);
  private observable: Observable<any> = this.subject.pipe(distinctUntilChanged());

  public ngOnDestroy(): void {
    this.subject.complete();
  }

  public transform(obj: any): any {
    this.subject.next(obj);
    return this.observable;  // newcode
  }
}
