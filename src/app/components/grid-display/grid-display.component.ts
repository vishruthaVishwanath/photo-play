import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.css']
})
export class GridDisplayComponent implements OnInit,OnChanges {

  @Input() searchData:string[] = [];
  @Input() searchType:string = '';

  constructor() { }

  ngOnInit(): void {
    //console.log("*************child data : **************", this.searchData)
  }

  ngOnChanges():void{
    //console.log("*************child data : **************", this.searchData)
  }

}
