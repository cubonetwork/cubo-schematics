import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page<%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

export const Page<%= classify(name) %>Routes: Routes = [
  {
    path: '',
    component: Page<%= classify(name) %>Component,<% if(root) { %>
    children: [
      {
        path: 'childrenpath',
        loadChildren: 'completepathtomodule.module#ChildrenModule'
      }
    ]<% } %>
  }
];
@NgModule({
  <% if(root) { %>imports: [RouterModule.forRoot(Page<%= classify(name) %>Routes)],
  <% } else { %>imports: [RouterModule.forChild(Page<%= classify(name) %>Routes)],
  <% } %>exports: [RouterModule]
})
export class Page<%= classify(name) %>Routing { }
