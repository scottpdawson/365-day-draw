import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from "./../shared.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-day',
    templateUrl: './day.component.html',
    styles: [],
    host: {
        '(document:keydown)': 'handleKeyboardEvents($event)'
    }
})
export class DayComponent implements OnInit {
    draw_month: string = "0";
    draw_day: string = "0";
    draw_text: string = "";
    draw_date: string = "";
    key: number = null;
    monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    constructor(private _sharedService: SharedService, private route: ActivatedRoute, private location: Location, private titleService: Title) {
    }

    handleKeyboardEvents(event: KeyboardEvent) {
        this.key = event.which || event.keyCode;
        if (this.key === 37 || this.key === 38) {
            this.getPreviousDay();
        } else if (this.key === 39 || this.key === 40) {
            this.getNextDay();
        }
    }

    ngOnInit() {
        this.draw_month = this.route.snapshot.url[0].path;
        this.draw_day = this.route.snapshot.url[1].path;
        if (!this._sharedService.tweetData) {
            Observable
            .zip(
                this._sharedService.getTweets(),
                this._sharedService.getStories()
                )
            .subscribe(() => {
                this.getData();
            });
        } else {
            this.getData();
        }
    }

    goBack() {
        this.location.back();
    }

    getData() {
        var idx = this.draw_month + "/" + this.draw_day + "/16";
        var text = this._sharedService.tweetData[idx].tweet_text;
        this.draw_date = "2016-" + this.draw_month + "-" + this.draw_day;
        this.draw_text = this._sharedService.tweetData[idx].tweet_text.replace(/\#365\w\w+\s?/g, '').replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
        this.titleService.setTitle("#365DayDraw: " + this.monthNames[parseInt(this.draw_month)-1] + " " + this.draw_day + " | by @scottpdawson ");
    }

    goToTwitter() {
        // go to the twitter URL for this image
        var idx = this.draw_month + "/" + this.draw_day + "/16";
        window.open(this._sharedService.tweetData[idx].image_link);
    }

    getNextDay() {  
        var myDate = new Date(2016, parseInt(this.draw_month) - 1, parseInt(this.draw_day));
        myDate.setDate(myDate.getDate() + 1); // get next day
        // if it's in 2017, subtract a year
        if (myDate.getFullYear() == 2017) {
            myDate.setFullYear(myDate.getUTCFullYear()-1);
        }
        this.goToDate(myDate);
    }

    getPreviousDay() {
        var myDate = new Date(2016, parseInt(this.draw_month) - 1, parseInt(this.draw_day));
        myDate.setDate(myDate.getDate() - 1); // get previous day
        // if it's in 2015, add a year
        if (myDate.getFullYear() == 2015) {
            myDate.setFullYear(myDate.getUTCFullYear()+1);
        }
        this.goToDate(myDate);
    }

    goToDate(d) {
        this.draw_month = (d.getMonth() + 1).toFixed();
        this.draw_day = d.getDate().toFixed();
        this.location.replaceState("/" + this.draw_month + "/" + this.draw_day);
        this.getData();
    }

}