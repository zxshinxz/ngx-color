import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlphaComponent } from './alpha.component';
import { CheckboardComponent } from './checkboard.component';
import { ColorWrap } from './color-wrap.component';
import { EditableInputComponent } from './editable-input.component';
import { HueComponent } from './hue.component';
import { SwatchComponent } from './swatch.component';

const components = [
  AlphaComponent,
  CheckboardComponent,
  ColorWrap,
  EditableInputComponent,
  HueComponent,
  SwatchComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule],
})
export class ColorCommonModule { }