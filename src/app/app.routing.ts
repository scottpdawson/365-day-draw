import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from "./overview/overview.component";
import { MonthComponent } from "./month/month.component";
import { DayComponent } from "./day/day.component";
import { StoryComponent } from "./story/story.component";
import { SearchComponent } from "./search/search.component";

const MAINMENU_ROUTES: Routes = [
    // full : makes sure the path is absolute path
    // order matters here; first match is first routed
	{
		path: '',
		component: OverviewComponent
	},
	{
		path: 'search',
		component: SearchComponent
	},
	{
		path: 'overview',
		component: OverviewComponent
	},
	{
		path: ':month',
		component: MonthComponent
	},
	{
		path: ':month/story',
		component: StoryComponent
	},
	{
		path: ':month/:day',
		component: DayComponent
	}
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);