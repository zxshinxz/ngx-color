import { Component, OnChanges, Input } from '@angular/core';

import { ColorWrap } from 'ngx-color';

@Component({
  selector: 'color-slider',
  template: `
  <div class="slider-picker {{ className }}">
    <div class="slider-hue">
      <color-hue
        [hsl]="hsl"
        [radius]="radius"
        [pointer]="pointer"
        (onChange)="handlePickerChange($event)"
      ></color-hue>
    </div>
    <div class="slider-swatches">
      <color-slider-swatches
        [hsl]="hsl"
        (onClick)="handlePickerChange($event)"
      ></color-slider-swatches>
    </div>
  </div>
  `,
  styles: [`
    .slider-hue {
      height: 12px;
      position: relative;
    }
  `],
})
export class SliderComponent extends ColorWrap implements OnChanges {
  @Input() pointer = {
    width: '14px',
    height: '14px',
    'border-radius': '6px',
    transform: 'translate(-7px, -1px)',
    'background-color': 'rgb(248, 248, 248)',
    'box-Shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
  };
  @Input() radius = 2;
  constructor() {
    super();
  }
  handlePickerChange({ data, $event }) {
    this.handleChange(data, $event);
  }
}
