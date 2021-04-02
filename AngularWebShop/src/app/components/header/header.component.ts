import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output("IDNumbers") list = new EventEmitter();

  public tips: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getList(listOfIDS: string[]) {
    this.tips = "";

    let valid: number[] = [];

    listOfIDS.forEach((element) => {

      let match = element.match(/[0-9]+/g);

      if(match != null) {
        match.forEach(numberMatch => {
          valid.push(parseInt(numberMatch));
        });
        

      } else {

        this.tips = "Type only numbers seperated by comma";

      }
    });

    console.log(valid);
    this.list.emit(valid);
  }
}
