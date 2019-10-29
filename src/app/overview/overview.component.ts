import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styles: []
 
})
export class OverviewComponent implements OnInit {
  draw_month: string = "";
  draw_day: string = "";
  draw_text: string = "";
  draw_data: string = "";
  constructor(private _sharedService: SharedService, private titleService: Title) {
  }
 
  ngOnInit() {
    this.titleService.setTitle("#365DayDraw by @scottpdawson ");
  }

  getData() {
  }
}