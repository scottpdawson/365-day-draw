import { Component, OnInit, HostListener, Injectable, Pipe, PipeTransform } from '@angular/core';
import { SharedService } from "./../shared.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styles: []
})
export class StoryComponent implements OnInit {

	draw_month: string = "";
	story: string = "";
	draw_date: string = "";
	monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

	constructor(
		private _sharedService: SharedService, 
		private route: ActivatedRoute, 
		private location: Location,
		private titleService: Title) {
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

	getData(month) {
		var idx = parseInt(month);
		this.draw_month = month;
		this.draw_date = "2016-" + month + "-1";
		this.story = this._sharedService.storyData[idx];
        this.titleService.setTitle("#365DayDraw: " + this.story["title"] + " | by @scottpdawson ");
	}

}
