import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { VentasModule } from './ventas/ventas.module';
import localEsMx from '@angular/common/locales/es-MX';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsMx);
registerLocaleData(localFr);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'es-MX' 
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
