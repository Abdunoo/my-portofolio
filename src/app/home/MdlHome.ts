import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmpHome } from './CmpHome';
import { RoutHome } from './RoutHome';
import { PrvHome } from './PrvHome';



@NgModule({
	declarations: [
		CmpHome,
	],
	imports: [
		CommonModule,
		RoutHome
	],
	providers: [PrvHome],

})
export class MdlHome { }
