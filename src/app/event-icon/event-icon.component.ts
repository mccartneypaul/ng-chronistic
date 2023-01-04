import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventOverviewComponent } from '../event-overview/event-overview.component';

@Component({
  selector: 'app-event-icon',
  templateUrl: './event-icon.component.html',
  styleUrls: ['./event-icon.component.scss']
})
export class EventIconComponent {
  @Input() top = 0;
  @Input() left = 0;
  @Input() height = 0;
  @Input() width = 0;

  name = "test"
  animal = "test armidillo"

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EventOverviewComponent, {
      data: {name: this.name, animal: this.animal},
      minWidth: '500px',
      maxWidth: '750px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
