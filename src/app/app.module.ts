import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


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

import { AngularEsriModule } from 'angular-esri-components';

import { TreeModule } from 'angular-tree-component'; // an angular treeview component

import { ViewsService } from './views.service';



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
    FormsModule,
    AngularEsriModule,
    SidebarModule.forRoot(),
    AngularSplitModule.forRoot(),
    TreeModule.forRoot()
    
  ],
  providers: [ViewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
