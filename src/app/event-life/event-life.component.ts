import { Options } from '@angular-slider/ngx-slider';
import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface EventLifeDialogData {
  animal: string;
  name: string;
}

export interface Location {
  rowNumber: number;
  name: string;
  posX: number;
  posY: number;
}

const LOCATION_DATA: Location[] = [
  {rowNumber: 1, name: 'Journey Begins', posX: 1.0079, posY: 21},
  {rowNumber: 2, name: 'Go to store', posX: 4.0026, posY: 431 },
  {rowNumber: 3, name: 'Go to bank', posX: 6.941, posY: 421 },
  {rowNumber: 4, name: 'School', posX: 9.0122, posY: 221 },
  {rowNumber: 5, name: 'Go home', posX: 10.811, posY: 201},
  {rowNumber: 6, name: 'Go to pharmacy', posX: 12.0107, posY: 131},
  {rowNumber: 7, name: 'Go to stadium', posX: 14.0067, posY: 212},
  {rowNumber: 8, name: 'Go to ice cream stand', posX: 15.9994, posY: 821},
  {rowNumber: 9, name: 'Go home', posX: 18.9984, posY: 91},
  {rowNumber: 10, name: 'Journey ends', posX: 20.1797, posY: 901 },
];

@Component({
  selector: 'app-event-life',
  templateUrl: './event-life.component.html',
  styleUrls: ['./event-life.component.scss']
})
export class EventLifeComponent {
  eventSliderValue: number = 100;
  eventSliderOptions: Options = {
    floor: 0,
    ceil: 250
  };

  displayedColumns: string[] = ['rowNumber', 'name', 'posX', 'posY'];
  dataSource = LOCATION_DATA;

  constructor(
    public dialogRef: MatDialogRef<EventLifeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventLifeDialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
