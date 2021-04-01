import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output("Searchables") searchList = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  search(input: HTMLInputElement) {
    var listOfArticleIDs: string[] = input.value.split(",").map(id=> id=id.trim());
    
    if(listOfArticleIDs[0] != "") {
      this.searchList.emit(listOfArticleIDs);
    }
    console.log(listOfArticleIDs);
    
    input.value = "";
  }

}
