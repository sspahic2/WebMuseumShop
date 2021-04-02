import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StringToNumberService } from 'src/app/services/converters/string-to-number.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output("IDNumbers") list = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
