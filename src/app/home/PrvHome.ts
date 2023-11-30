import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class PrvHome {

	constructor(private router: Router) { }

	scrollTo(id: any) {
		const section = document.getElementById(id);
		if (section) {
			this.scrollToElement(section);
		}
	}

	// scrollToElementById(id: '') {
	// 	const element = document.getElementById(id)
	// 	this.scrollToElement(element);
	// }

	// private getElementById(id: string): HTMLElement {
	// 	console.log("element id : ", id);
	// 	const element = document.getElementById(id);
	// 	return element[0]

	// }

	scrollToElement(element: HTMLElement) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}
