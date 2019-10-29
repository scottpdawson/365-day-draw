import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { OverviewComponent } from './overview/overview.component';
import { CONST_ROUTING } from './app.routing';
import { SharedService } from "./shared.service";
import { MonthPipe } from './month.pipe';
import { SearchPipe } from './search.pipe';
import { StoryComponent } from './story/story.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MonthComponent,
    DayComponent,
    OverviewComponent,
    MonthPipe,
    SearchPipe,
    StoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
