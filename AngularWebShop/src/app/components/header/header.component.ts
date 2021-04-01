import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExecOptionsWithStringEncoding } from 'node:child_process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output("searchItems") list = new EventEmitter();
  public tips?: string;
  constructor() { }

  ngOnInit(): void {
  }

  getList(listOfIDS: string[]) {
    this.list.emit(listOfIDS);
  }
}
