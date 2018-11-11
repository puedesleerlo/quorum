import { Component, AfterViewInit } from '@angular/core';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements AfterViewInit {
  title = 'quorum';
  loader = true;
  ngAfterViewInit() {
    setTimeout(() => this.loader = false, 2000)
  }
}
