/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Component, OnInit, ViewChild, ViewContainerRef, HostBinding } from '@angular/core';

import { MessageService } from '../../services/message.service';
import { Message, MessageType } from '../../services/message';
import { Overlay, CdkOverlayOrigin, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, CdkPortal } from '@angular/cdk/portal';

@Component({
    selector: 'dxc-alert-message',
    templateUrl: 'dxc-alert-message.component.html',
    styleUrls: ['dxc-alert-message.component.scss'],
})

export class DxcAlertMessageComponent implements OnInit {
    public messages: Message[] = [];
    @ViewChild('messageOrigin') public messageOrigin: CdkOverlayOrigin;
    @ViewChild('messageTemplate') public messageTemplate: CdkPortal;

    @HostBinding('style.background-color') public backColor = '#FFF';

    constructor(private messageService: MessageService, public overlay: Overlay, public viewContainerRef: ViewContainerRef) {
        this.messageService.getMessage().subscribe((alert: Message) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.messages = [];
                return;
            }

            // add alert to array
            this.messages.push(alert);
            // console.log(this.messages)
        });
     }

    public ngOnInit() {
        // no code
    }

    public showAllMessages() {
      /*  const strategy = this.overlay.position()
        .connectedTo(
            this.messageOrigin.elementRef,
            {originX: 'start', originY: 'bottom'},
            {overlayX: 'start', overlayY: 'top'} ); */

     const strategy = this.overlay.position()
      .flexibleConnectedTo(this.messageOrigin.elementRef)
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

        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            positionStrategy: strategy
        });
        const overlayRef = this.overlay.create(config);

        overlayRef.attach(this.messageTemplate);
        overlayRef.backdropClick().subscribe(() => overlayRef.detach());
    }

    public removeAlert(alert: Message) {
        this.messageService.clear();
    }

    public cssClass(alert: Message) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case MessageType.Success:
                return 'alert alert-success';
            case MessageType.Error:
                return 'alert alert-danger';
            case MessageType.Info:
                return 'alert alert-info';
            case MessageType.Warning:
                return 'alert alert-warning';
            default:
        }
    }
}
