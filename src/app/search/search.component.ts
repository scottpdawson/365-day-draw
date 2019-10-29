import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from "./../shared.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: [],
    host: {
        '(document:keydown)': 'handleKeyboardEvents($event)'
    }
})
export class SearchComponent implements OnInit {

	id_search: string = "";
	key: number = null;
	can_search: boolean = false;
	draw_data: string = "";
	draw_date: string = "";
	draw_month: string = "";

	constructor(private _sharedService: SharedService, private route: ActivatedRoute, private location: Location, private titleService: Title) {
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
				this.enableSearch();
			});
		} else {
			this.enableSearch();
		}
	}

	handleKeyboardEvents(event: KeyboardEvent) {
        this.key = event.which || event.keyCode;
        if (this.key === 27) {
        	// escape will reset the form
            this.id_search = "";
            this.idSearchChanged();
        }
    }

	goBack() {
		this.location.back();
	}

	enableSearch() {
		// allow the user to search only if we have data downloaded via ngOnInit
		this.can_search = true;
		this.id_search = this._sharedService.lastSearch; // initialize to last search term
		if (!this.draw_data) {
			this.draw_data = this._sharedService.tweetData;
		}
	    this.titleService.setTitle("Search #365DayDraw by @scottpdawson ");
	}

	idSearchChanged() {
		this._sharedService.lastSearch = this.id_search; // set last search term
	}

}
