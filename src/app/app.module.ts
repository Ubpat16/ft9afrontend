import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DjangularComponent } from './djangular/djangular.component';
import { DjangularService } from './djangular.service';

import { HttpClientModule } from '@angular/common/http';
import { MetaapiComponent } from './djangular/metaapi/metaapi.component';

@NgModule({
  declarations: [
    AppComponent,
    DjangularComponent,
    MetaapiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DjangularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
