import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';
<% if(translate) { %>
import { AppTranslateService } from '@app/providers/translate.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MetaModule } from '@ngx-meta/core';
import { Observable } from 'rxjs';

import pt from './i18n/pt';

export function createTranslateLoader() {
  return {
    getTranslation: () => Observable.of(pt)
  }
}
<% } %>
describe('<%= classify(name) %>Component', () => {
  let component: <%= classify(name) %>Component;
  let fixture: ComponentFixture<<%= classify(name) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= classify(name) %>Component ],
      <% if(translate) { %>
      imports: [ 
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useFactory: (createTranslateLoader) },
          isolate: true
        }),
        MetaModule.forRoot()
      ],
      providers: [ AppTranslateService ]
      <% } %>
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classify(name) %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
