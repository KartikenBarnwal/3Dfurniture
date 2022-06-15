import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: boolean=false;
  title = '3Dfurniture';
  open3DView() {
    console.log('hi');
    this.toggle = !this.toggle;
  }
}
