import { Component, OnInit, HostListener, Injectable, Pipe, PipeTransform } from '@angular/core';
import { SharedService } from "./../shared.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-month',
	templateUrl: './month.component.html',
	host: {
		'(document:keydown)': 'handleKeyboardEvents($event)'
	}
})

export class MonthComponent implements OnInit {
	draw_date: string = "";
	draw_month: string = "";
	key: number = null;
	draw_data: string = "";
	show_month_navigation: boolean = false;
	story: string = "";
	monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	constructor(
		private _sharedService: SharedService, 
		private route: ActivatedRoute, 
		private location: Location,
		private titleService: Title) {
	}

	handleKeyboardEvents(event: KeyboardEvent) {
		this.key = event.which || event.keyCode;
		if (this.key === 37 || this.key === 38) {
			this.getPreviousMonth();
		} else if (this.key === 39 || this.key === 40) {
			this.getNextMonth();
		}
	}

	ngOnInit() {
		var month = this.route.snapshot.url[0].path;
		if (!this._sharedService.tweetData) {
			Observable
			.zip(
				this._sharedService.getTweets(),
				this._sharedService.getStories()
				)
			.subscribe(() => {
				this.getData(month);
			});
		} else {
			this.getData(month);
		}
	}

	goBack() {
        this.location.back();
    }

	getData(month) {
		var idx = parseInt(month);
		this.draw_date = "2016-" + month + "-1";
		this.draw_month = month;
		if (!this.draw_data) {
			this.draw_data = this._sharedService.tweetData;
		}
		this.story = this._sharedService.storyData[idx];
		this.location.replaceState("/" + month);
		this.titleService.setTitle("#365DayDraw: " + this.monthNames[month-1] + " | by @scottpdawson ");
		this.show_month_navigation = false;
	}

	getNextMonth() {  
		var thisMonth = parseInt(this.draw_month);
		if (thisMonth === 12) {
			thisMonth = 1;
		} else {
			thisMonth++;
		}
		this.getData(thisMonth);
		this.location.replaceState("/" + thisMonth);
	}

	getPreviousMonth() {
		var thisMonth = parseInt(this.draw_month);
		if (thisMonth === 1) {
			thisMonth = 12;
		} else {
			thisMonth--;
		}
		this.getData(thisMonth);
		this.location.replaceState("/" + thisMonth);
	}

}