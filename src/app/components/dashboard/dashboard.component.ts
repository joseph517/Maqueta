import { Component } from '@angular/core';
import { faArrowLeftLong,faMessage, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent { 
  faArrowLeftLong = faArrowLeftLong;
  faMessage = faMessage;
  faToggleOff = faToggleOff
  faToggleOn = faToggleOn
}
