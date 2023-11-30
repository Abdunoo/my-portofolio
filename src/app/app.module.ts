import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';	
import { MdlHome } from './home/MdlHome';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 MdlHome
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
