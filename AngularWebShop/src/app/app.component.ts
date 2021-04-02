import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  IDlist?: number[];
  onRecievedList(list: number[]) {
    this.IDlist = list;
  }
}
