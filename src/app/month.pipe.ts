// month.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'month'})
export class MonthPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {

    	// if date argument is passed, it represents a month, so strip off the month from the date
    	var thisMonth = null;
    	if (args) {
    		thisMonth = args.toString().split("-")[1];
    	} else {
            thisMonth = "*";
        }

        // create instance vars to store keys and final output
        let keyArr: any[] = Object.keys(value),
            dataArr = [];

        // loop through the object,
        // pushing values to the return array
        keyArr.forEach((key: any) => {
        	if ((thisMonth === "*") || (thisMonth === key.split("/")[0])) {
            	dataArr.push({key: key, value: value[key]});
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