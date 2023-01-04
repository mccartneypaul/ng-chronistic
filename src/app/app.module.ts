import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewMapComponent } from './overview-map/overview-map.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { TimelineComponent } from './timeline/timeline.component';
import { LayoutComponent } from './layout/layout.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { EventIconComponent } from './event-icon/event-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewMapComponent,
    TimelineComponent,
    LayoutComponent,
    EventOverviewComponent,
    EventIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    NgxSliderModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
