// search.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {

    	// if argument is passed, it represents a search string
    	var searchString = null;
        var substrings = null;
        var dataArr = [];

    	if (args) {
    		searchString = args.toString().toLowerCase();
            substrings = searchString.split(" ");
            // remove anything less than 3 characters
            for (var i = 0; i < substrings.length; i++) {
                if(substrings[i].length < 3) {
                   substrings.splice(i, 1);
                }
            }
    	} else {
            return [];
        }

        if (substrings && substrings.length == 0) {
            // anything left to search on?
            return [];
        }

        // create instance vars to store keys and final output
        let keyArr: any[] = Object.keys(value);

        function containsKey(obj, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i].key === obj.key) {
                    return true;
                }
            }
            return false;
        }

        // loop through the object, pushing values to the return array
        keyArr.forEach((key: any) => {
            var thisTweetText = "",
                length = substrings.length,
                thisTweet = null;
            while(length--) {
                thisTweetText =  " " + value[key].tweet_text + " " + value[key].tags + " "; // search tweet text + tags
                thisTweetText = thisTweetText.toLowerCase();
                if (thisTweetText.indexOf(" " + substrings[length] + " ")!=-1) { // match only with surrounding spaces
                    // one of the substrings is in tweet_text
                    thisTweet = { key: key, value: value[key] };
                    // if the key is not in the array yet ... add it
                    if (!containsKey(thisTweet, dataArr)) {
                        dataArr.push(thisTweet);
                    }
                }
            }
        });

        // sort the dates before returning them
        dataArr.sort(function(a,b){
			var dateA = new Date(a.key).getTime();
			var dateB = new Date(b.key).getTime();
			return dateA > dateB ? 1 : -1;
		});

        // return the resulting array
        return dataArr;
    }
}