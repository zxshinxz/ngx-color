import { Component, Input } from '@angular/core';
import * as material from 'material-colors';

import { ColorWrap } from 'ngx-color';
import { isValidHex } from 'ngx-color/helpers';

@Component({
  selector: 'color-circle',
  template: `
  <div class="circle-picker {{ className }}"
    [style.width.px]="width"
    [style.margin-right.px]="-circleSpacing"
    [style.margin-bottom.px]="-circleSpacing">
    <color-circle-swatch
      *ngFor="let color of colors"
      [color]="color"
      (onClick)="handleBlockChange($event)"
      [focus]="isActive(color)"
      (onSwatchHover)="onSwatchHover.emit($event)"
    ></color-circle-swatch>
  </div>
  `,
  styles: [`
    .circle-picker {
      display: flex;
      flex-wrap: wrap;
    }
  `],
})
export class CircleComponent extends ColorWrap {
  @Input() width = 252;
  @Input() circleSize = 28;
  @Input() circleSpacing = 14;
  @Input() className = '';
  @Input() colors = [
    material.red['500'], material.pink['500'], material.purple['500'],
    material.deepPurple['500'], material.indigo['500'], material.blue['500'],
    material.lightBlue['500'], material.cyan['500'], material.teal['500'],
    material.green['500'], material.lightGreen['500'], material.lime['500'],
    material.yellow['500'], material.amber['500'], material.orange['500'],
    material.deepOrange['500'], material.brown['500'], material.blueGrey['500'],
  ];

  constructor() {
    super();
  }
  isActive(color) {
    return this.hex === color;
  }
  handleBlockChange({ hex, $event }) {
    if (isValidHex(hex)) {
      this.handleChange({ hex, source: 'hex' }, $event);
    }
  }
  handleValueChange({data, $event}) {
    this.handleChange(data, $event);
  }
}
