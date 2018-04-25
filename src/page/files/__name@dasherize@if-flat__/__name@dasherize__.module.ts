import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <%= classify(name) %>Routing } from './<%= dasherize(name) %>.routing';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    <%= classify(name) %>Routing
  ],
  declarations: [<%= classify(name) %>Component]
})
export class <%= classify(name) %>Module { }
