/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { Message, MessageType } from './message';

@Injectable()
export class MessageService {
    private subject = new Subject<Message>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }

    public getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    public success(message: string, keepAfterRouteChange = false) {
        this.alert(MessageType.Success, message, keepAfterRouteChange);
    }

    public error(message: string, keepAfterRouteChange = false) {
        this.alert(MessageType.Error, message, keepAfterRouteChange);
    }

    public info(message: string, keepAfterRouteChange = false) {
        this.alert(MessageType.Info, message, keepAfterRouteChange);
    }

    public warn(message: string, keepAfterRouteChange = false) {
        this.alert(MessageType.Warning, message, keepAfterRouteChange);
    }

    public clear() {
        // clear alerts
       this.subject.next(null); 
    }

    private alert(pType: MessageType, pMessage: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: pType, message: pMessage } as Message);
    }
}
