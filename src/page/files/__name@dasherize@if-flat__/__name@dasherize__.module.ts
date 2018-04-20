import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page<%= classify(name) %>Routing } from './<%= dasherize(name) %>.routing';
import { Page<%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    Page<%= classify(name) %>Routing
  ],
  declarations: [Page<%= classify(name) %>Component]
})
export class Page<%= classify(name) %>Module { }
