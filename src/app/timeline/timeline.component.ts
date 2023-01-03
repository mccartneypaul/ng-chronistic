import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { Time, formatDate } from '@angular/common';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  dateRange: Date[] = this.createDateRange();
  dateSliderValue: number = this.dateRange[0].getTime();
  dateSliderOptions: Options = {
    stepsArray: this.dateRange.map((date: Date) => {
      return { value: date.getTime() };
    }),
    translate: (value: number, label: LabelType): string => {
      return new Date(value).toDateString();
    }
  };

  timeRange: Time[] = this.createTimeRange();
  timeSliderValue: number = this.timeRange[0].hours;
  timeSliderOptions: Options = {
    stepsArray: this.timeRange.map((time: Time) => {
      return { value: time.hours };
    }),
    translate: (value: number, label: LabelType): string => {
      return formatDate(new Date().setHours(value), 'shortTime', 'en-US');
    }
  };

  epochSliderValue: number = 100;
  epochSliderOptions: Options = {
    floor: 0,
    ceil: 250
  };

  constructor() { }

  ngOnInit(): void {
  }

  createDateRange(): Date[] {
    const dates: Date[] = [];
    for (let i: number = 1; i <= 31; i++) {
      dates.push(new Date(2018, 5, i));
    }
    return dates;
  }

  createTimeRange(): Time[] {
    const times: Time[] = [];
    for (let i: number = 0; i <= 24; i++) {
      times.push({hours: i, minutes: 0});
    }
    return times;
  }
}
