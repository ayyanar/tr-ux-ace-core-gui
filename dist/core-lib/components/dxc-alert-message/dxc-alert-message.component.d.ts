import { OnInit, ViewContainerRef } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../services/message';
import { Overlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export declare class DxcAlertMessageComponent implements OnInit {
    private messageService;
    overlay: Overlay;
    viewContainerRef: ViewContainerRef;
    messages: Message[];
    messageOrigin: CdkOverlayOrigin;
    messageTemplate: CdkPortal;
    backColor: string;
    constructor(messageService: MessageService, overlay: Overlay, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    showAllMessages(): void;
    removeAlert(alert: Message): void;
    cssClass(alert: Message): "alert alert-success" | "alert alert-danger" | "alert alert-info" | "alert alert-warning";
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcAlertMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcAlertMessageComponent, "dxc-alert-message", never, {}, {}, never, never>;
}
