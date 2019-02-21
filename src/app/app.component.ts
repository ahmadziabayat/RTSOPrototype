import { Component, ChangeDetectionStrategy, Input, OnInit , ViewChild, AfterViewInit  } from '@angular/core';
import { ViewsService } from './views.service';
import { Subscription } from 'rxjs';

export interface Action {
  isVisibleParticipantsSize: number,
  isVisiblePlanningBoardSize: number,
  isVisiblePropertyInspectorSize: number,
  isVisibleSpectrumDisplaySize: number,
  isVisibleParticipants: boolean,
  isVisiblePlanningBoard: boolean,
  isVisiblePropertyInspector: boolean,
  isVisibleSpectrumDisplay: boolean,
  useTransition: boolean,
  logs: string
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [ ViewsService ]
})
export class AppComponent implements OnInit {

  title = 'RTSOPrototype';

  isVisibleParticipants: boolean;
  subscription: Subscription;

  @Input() action = this.viewService.action;

  constructor(private viewService: ViewsService ) {
 
  }

  ngOnInit() {

   }

   disabledEnabledParticipants($event: boolean) {
    this.action.isVisibleParticipants = $event
  }

  disabledEnabledPlanning($event: boolean) {
    this.action.isVisiblePlanningBoard = $event
  }

  disabledEnabledPropertyInspector($event: boolean) {
    this.action.isVisiblePropertyInspector = $event
  }

  disabledEnabledSpectrumDisplay($event: boolean) {
    this.action.isVisibleSpectrumDisplay = $event
  }

 

   
}
