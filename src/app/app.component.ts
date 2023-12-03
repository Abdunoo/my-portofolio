import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PrvHome } from './PrvHome';
// import { PrvHome } from './PrvHome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portofolio';
  isDropdownOpen = false;

	showHome = false
	showSkill = false
	showPorto = false
	showTech = false
	showTailwind = false
	showContact = false

	@ViewChild('home') divHome!: ElementRef;
	@ViewChild('skill') divSkill!: ElementRef;
	@ViewChild('technology') divTech!: ElementRef;
	@ViewChild('portofolio') divPorto!: ElementRef;
	@ViewChild('tailwind') divTailwind!: ElementRef;
	@ViewChild('contact') divContact!: ElementRef;


	constructor(private prvHome: PrvHome
	) { }

	ngOnInit(): void {

	}

	public onViewportScroll() {
		const windowHeight = window.innerHeight;
		const home = this.divHome.nativeElement.getBoundingClientRect();
		const skill = this.divSkill.nativeElement.getBoundingClientRect();
		const porto = this.divPorto.nativeElement.getBoundingClientRect();
		const tech = this.divTech.nativeElement.getBoundingClientRect();
		const tail = this.divTailwind.nativeElement.getBoundingClientRect();
		const contact = this.divContact.nativeElement.getBoundingClientRect();

		if (home.top >= 0) {
			setTimeout(() => { this.showHome = true; });
		} else if (skill.top >= 0) {
			console.log('test skill')
			setTimeout(() => { this.showSkill = true; });
		} else if (porto.top >= 0) {
			console.log('test porto')
			setTimeout(() => { this.showPorto = true; });
		} else if (tech.top >= 0) {
			console.log('test tech')
			setTimeout(() => { this.showTech = true; });
		}else if (tail.top >= 0) {
			console.log('test tech')
			setTimeout(() => { this.showTailwind = true; });
		}else if (contact.top >= 0) {
			console.log('test tech')
			setTimeout(() => { this.showContact = true; });
		}
	}

	scrollTo(id: any) {
		this.prvHome.scrollTo(id);
		if (id === 'home') {
			this.showHome = true
		} else if (id === 'skill') {
			this.showSkill = true
		} else if (id === 'portofolio') {
			this.showPorto = true
		} else {
			this.showTech = true
		}

	}

	send() {
		window.alert('cannot send message, recommend use telegram')
	}

	handleButtonClick(section: string): void {
		this.prvHome.scrollTo(section);
		this.isDropdownOpen = false
		console.log('nav')
	}
}
