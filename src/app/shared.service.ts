import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
 
@Injectable()
export class SharedService {
    tweetURL = "/assets/tweets.json";
    tweetData = "";
    storyURL = "/assets/stories.json";
    storyData = "";
    lastSearch = "";

    totReqsMade: number = 0;
    constructor(private _http: Http) { }

    getTweets() { 
    	// don't call this multiple times if tweetData already populated in the app
    	if (!this.tweetData) {
    		this.totReqsMade = this.totReqsMade + 1; 
	        return this._http.get(this.tweetURL)
	            .map(response => {
	                { 
	                	this.tweetData = response.json();
	                	return true;
	                };
	            })
	            .catch(error => Observable.throw(error.json()));
    	} 
  //   	else {
  //   		this.totReqsMade = this.totReqsMade + 1; 
	 //        return this._http.get(this.tweetURL)
	 //            .map(response => {
	 //                { 
	 //                	this.tweetData = response.json();
	 //                	return true;
	 //                };
	 //            })
	 //            .catch(error => Observable.throw(error.json()));
		// }
    }

    getStories() { 
    	// don't call this multiple times if storyData already populated in the app
    	if (!this.storyData) {
    		this.totReqsMade = this.totReqsMade + 1; 
	        return this._http.get(this.storyURL)
	            .map(response => {
	                { 
	                	this.storyData = response.json();
	                	return true;
	                };
	            })
	            .catch(error => Observable.throw(error.json()));
    	} 
    	// else {
    	// 	this.totReqsMade = this.totReqsMade + 1; 
	    //     return this._http.get(this.storyURL)
	    //         .map(response => {
	    //             { 
	    //             	this.storyData = response.json();
	    //             	return true;
	    //             };
	    //         })
	    //         .catch(error => Observable.throw(error.json()));
    	// }
    }
}