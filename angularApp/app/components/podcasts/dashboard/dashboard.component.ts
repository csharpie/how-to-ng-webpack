import { Component } from '@angular/core';

import { Podcast } from '../../../shared/models/podcasts/podcast';

@Component({
  selector: 'my-podcast-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'app works!';

  podcasts:Podcast[];

  ngOnInit() {
  	this.podcasts = [
  		{
  			title: ".NET Rocks!",
        hostedBy: "Carl Franklin and Richard Campbell",
        establishedYear: 2002,
        producedBy: "Pwop Studios",
        category: "Technology"
  		}
  	]
  }
}
