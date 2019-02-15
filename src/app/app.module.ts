import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SidebarModule } from 'ng-sidebar';
import { AngularSplitModule } from 'angular-split';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ClassificationBarComponent } from './classification-bar/classification-bar.component';
import { MenuIconBarComponent } from './menu-icon-bar/menu-icon-bar.component';
import { ParticipantsViewComponent } from './participants-view/participants-view.component';
import { PlanningBoardViewComponent } from './planning-board-view/planning-board-view.component';
import { PropertyInspectorComponent } from './property-inspector/property-inspector.component';
import { SpectrumDisplayViewComponent } from './spectrum-display-view/spectrum-display-view.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { CopNavbarComponent } from './cop-navbar/cop-navbar.component';
 

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ClassificationBarComponent,
    MenuIconBarComponent,
    ParticipantsViewComponent,
    PlanningBoardViewComponent,
    PropertyInspectorComponent,
    SpectrumDisplayViewComponent,
    StatusBarComponent,
    CopNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    AngularSplitModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
