import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-icon',
  templateUrl: './event-icon.component.html',
  styleUrls: ['./event-icon.component.scss']
})
export class EventIconComponent implements OnInit {
  @Input() top = 0;
  @Input() left = 0;
  @Input() height = 0;
  @Input() width = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
