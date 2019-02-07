import {Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ng2-st-actions',
  template: `
    <a href="#" class="nb-checkmark"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="nb-close"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `,
  styleUrls:['../../../../components/icon-style.scss']
})
export class ActionsComponent implements OnChanges {

  @Input() grid: Grid;
  @Output() create = new EventEmitter<any>();

  createButtonContent: string;
  cancelButtonContent: string;

  ngOnChanges() {
    this.createButtonContent = this.grid.getSetting('add.createButtonContent');
    this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
  }
}
