/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

/**
 * Angular 2
 */
import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { ApplicationRef, enableProdMode } from '@angular/core';

/**
 * Environment Providers
 */
let PROVIDERS: any[] = [];

/**
 * Angular debug tools in the dev console
 * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
 */
let _decorateModuleRef = <T>(value: T): T => { return value; };

_decorateModuleRef = (modRef: any) => {
  const appRef = modRef.injector.get(ApplicationRef);
  const cmpRef = appRef.components[0];

  enableDebugTools(cmpRef);
  return modRef;
};

/**
 * Development
 */
PROVIDERS = [
  ...PROVIDERS,
  /**
   * Custom providers in development.
   */
];


export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
