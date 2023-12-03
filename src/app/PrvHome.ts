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

	scrollToElement(element: HTMLElement) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}
