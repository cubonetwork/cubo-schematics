import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<% if(translate) { %>import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateLocalLoader } from '@app/providers/translate-local-loader.service';<% } %>
<% if(!children) { %>import { <%= classify(name) %>Routing } from './<%= dasherize(name) %>.routing';<% } %>
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';
<% if(translate) { %>
import en from './i18n/en';
import es from './i18n/es';
import pt from './i18n/pt';

export function createTranslateLoader() {
  return new TranslateLocalLoader({
    'en': (<any> en),
    'es': (<any> es),
    'pt': (<any> pt)
  });
}<% } %>
@NgModule({
  imports: [
    CommonModule,
    <% if(translate) { %>TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
      },
      isolate: true
    }),<% } %>
    <% if(!children) { %><%= classify(name) %>Routing<% } %>
  ],
  <% if(children) { %>exports: [
    <%= classify(name) %>Component
  ],<% } %>
  declarations: [
    <%= classify(name) %>Component
  ]
})
export class <%= classify(name) %>Module { }
