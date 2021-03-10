import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  displayType = "photos";
  @Output() dispTypecast = new EventEmitter<{ dispType: string }>();


  emitType(type) {
    this.displayType = type;
    this.dispTypecast.emit({ dispType: this.displayType });
  }


  constructor() { }

  ngOnInit(): void {
  }

}
