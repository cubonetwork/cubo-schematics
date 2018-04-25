import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    <%= classify(name) %>Component
  ],
  declarations: [
    <%= classify(name) %>Component
  ]
})
export class <%= classify(name) %>Module { }
