import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbMenuService, NbMenuModule, } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import  { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { ApiService } from './api.service';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { Ng2SmartTableModule } from './ng2-smart-table';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,    
    NbThemeModule.forRoot({ name: 'default' }),
    RouterModule,
    NbMenuModule.forRoot(),
    // ApiService,
    HttpClientModule,
    AngularFontAwesomeModule ,
    Ng2SmartTableModule,
 
    
  ],
  providers: [ NbMenuService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
