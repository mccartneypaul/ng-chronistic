import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EventLifeComponent } from '../event-life/event-life.component';

export interface EventOverviewDialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss']
})
export class EventOverviewComponent {
  constructor(
    public eventLifeDialog: MatDialog,
    public eventOverviewDialogRef: MatDialogRef<EventOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventOverviewDialogData,
  ) {}

  onNoClick(): void {
    this.eventOverviewDialogRef.close();
  }

  openEventLifeDialog(): void {
    const eventLifeDialogRef = this.eventLifeDialog.open(EventLifeComponent, {
      minWidth: '500px',
      maxWidth: '750px',
    });

    eventLifeDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
