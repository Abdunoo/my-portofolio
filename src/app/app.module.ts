import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrvHome } from './PrvHome';

@NgModule({
	declarations: [
		AppComponent,

	],
	imports: [
		BrowserModule,
		AppRoutingModule,

	],
	providers: [PrvHome],
	bootstrap: [AppComponent]
})
export class AppModule { }
