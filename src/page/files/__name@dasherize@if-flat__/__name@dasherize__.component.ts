import { Component, ViewEncapsulation, ChangeDetectionStrategy<% if(translate) { %>, Injector<% } %> } from '@angular/core';
<% if(translate) { %> import { PageBaseComponent } from '@app/core/page-base.component';<% } %>

@Component({
  selector: '<%= dasherize(name) %>',<% if(inlineTemplate) { %>
  template: `
    <p>
      <%= dasherize(name) %> works!
    </p>
  `,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Emulated') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classify(name) %>Component <% if(translate) { %> extends PageBaseComponent<% } %>{
  <% if(translate) { %>
  constructor(
    private injector: Injector
  ) {
    super(injector);
  }
  <% } %>
}
