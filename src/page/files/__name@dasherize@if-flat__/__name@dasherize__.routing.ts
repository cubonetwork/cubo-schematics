import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

export const <%= classify(name) %>Routes: Routes = [
  {
    path: '',
    component: <%= classify(name) %>Component,<% if(root) { %>
    children: [
      {
        path: 'childrenpath',
        loadChildren: 'completepathtomodule.module#ChildrenModule'
      }
    ]<% } %>
  }
];
@NgModule({
  <% if(root) { %>imports: [RouterModule.forRoot(<%= classify(name) %>Routes)],
  <% } else { %>imports: [RouterModule.forChild(<%= classify(name) %>Routes)],
  <% } %>exports: [RouterModule]
})
export class <%= classify(name) %>Routing { }
