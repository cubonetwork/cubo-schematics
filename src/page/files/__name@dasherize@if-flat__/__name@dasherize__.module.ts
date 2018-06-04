import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

<% if(!children) { %>import { <%= classify(name) %>Routing } from './<%= dasherize(name) %>.routing';<% }
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule<% if(!children) { %>,
    <%= classify(name) %>Routing<% }
  ],
  <% if(children) { %>exports: [
    <%= classify(name) %>Component
  ],% }
  declarations: [
    <%= classify(name) %>Component
  ]
})
export class <%= classify(name) %>Module { }
