import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css']
})
export class LOTComponent implements OnInit {

  @Input() name = '';
  constructor() { }

  ngOnInit() {
  }

}
