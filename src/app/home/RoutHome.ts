import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmpHome } from './CmpHome';



@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: 'dashboard', component: CmpHome },
			
		])
	],
	exports: [RouterModule],

})
export class RoutHome { }

