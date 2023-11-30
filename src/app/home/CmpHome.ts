import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PrvHome } from './PrvHome';

@Component({
	selector: 'cmp-home',
	templateUrl: './CmpHome.html',
	styleUrls: ['./CmpHome.scss']
})
export class CmpHome implements OnInit {
	  isDropdownOpen = false;

	showHome = false
	showSkill = false
	showPorto = false
	showTech = false

	@ViewChild('home') divHome!: ElementRef;
	@ViewChild('skill') divSkill!: ElementRef;
	@ViewChild('technology') divTech!: ElementRef;
	@ViewChild('portofolio') divPorto!: ElementRef;


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
			this.showTech = true
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
		this.isDropdownOpen = false;
		this.scrollTo(section);
	 }
	 













}

