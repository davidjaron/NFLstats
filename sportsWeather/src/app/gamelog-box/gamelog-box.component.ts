import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gamelog-box',
  templateUrl: './gamelog-box.component.html',
  styleUrls: ['./gamelog-box.component.css']
})
export class GamelogBoxComponent implements OnInit {

  @Input()
  name: String;

  constructor() { }

  ngOnInit() {
  }

}
