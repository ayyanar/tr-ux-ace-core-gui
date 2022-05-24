/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

export class DxcNavItem {
    private _itemName: string = "Nav";
    private _itemLink: string = ".";

    constructor(name: string, link:string) {
        this._itemName = name;
        this._itemLink = link;
    }
  
    public set Name(itemName: string) {
      this._itemName = itemName;
    }
    public get Name() {
      return this._itemName;
    }
  
    public set Link(itemLink: string) {
      this._itemLink = itemLink;
    }
    public get Link() {
      return this._itemLink;
    }
  }