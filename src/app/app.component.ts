import { Component, ChangeDetectionStrategy, ElementRef, Input, OnInit , ViewChild, AfterViewInit, OnDestroy,  } from '@angular/core';
import { ViewsService } from './views.service';
import { Subscription } from 'rxjs';

import { AngularSplitModule } from 'angular-split';



export interface Action {
  isVisibleParticipantsSize: number;
  isVisiblePlanningBoardSize: number;
  isVisiblePropertyInspectorSize: number;
  isVisibleSpectrumDisplaySize: number;
  isVisibleParticipants: boolean;
  isVisiblePlanningBoard: boolean;
  isVisiblePropertyInspector: boolean;
  isVisibleSpectrumDisplay: boolean;
  useTransition: boolean;
  logs: string;
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [ ViewsService ]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'RTSOPrototype';

  // isVisibleParticipants: boolean;
  subscription: Subscription;

  @Input() action = this.viewService.action;

  @ViewChild('mySplit') mySplitEl: AngularSplitModule;
  @ViewChild('logs') logsEl: ElementRef;

  ngAfterViewInit() {
    // this.subscription = this.mySplitEl.dragProgress$.subscribe(data => {
    // console.log(`${ formatDate(new Date()) } > dragProgress$ observable emitted but current component change detection didn't run!`, data);
    // })
}

  constructor(private viewService: ViewsService ) {

  }

  ngOnInit() {
   }

   disabledEnabledParticipants($event: boolean) {
    this.action.isVisibleParticipants = $event;
  }

  disabledEnabledPlanning($event: boolean) {
    this.action.isVisiblePlanningBoard = $event;
  }

  disabledEnabledPropertyInspector($event: boolean) {
    this.action.isVisiblePropertyInspector = $event;
  }

  disabledEnabledSpectrumDisplay($event: boolean) {
    this.action.isVisibleSpectrumDisplay = $event;
  }

  gutterClick(e: {gutterNum: number, sizes: Array<number>}) {
    if(e.gutterNum === 1) {
        if (this.action.isVisibleParticipantsSize > 0) {
            this.action.isVisiblePlanningBoardSize += this.action.isVisibleParticipantsSize;
            this.action.isVisibleParticipantsSize = 0;
        } else if (this.action.isVisiblePlanningBoardSize > 15) {
            this.action.isVisiblePlanningBoardSize -= 15;
            this.action.isVisibleParticipantsSize = 15;
        } else {
            this.action.isVisibleParticipantsSize = 15;
            this.action.isVisiblePlanningBoardSize = 70;
            this.action.isVisiblePropertyInspectorSize = 15;
        }
    } else if(e.gutterNum === 2) {
        if (this.action.isVisiblePropertyInspectorSize > 0) {
            this.action.isVisiblePlanningBoardSize += this.action.isVisiblePropertyInspectorSize;
            this.action.isVisiblePropertyInspectorSize = 0;
        } else if (this.action.isVisiblePlanningBoardSize > 15) {
            this.action.isVisiblePlanningBoardSize -= 15;
            this.action.isVisiblePropertyInspectorSize = 15;
        } else {
            this.action.isVisibleParticipantsSize = 15;
            this.action.isVisiblePlanningBoardSize = 70;
            this.action.isVisiblePropertyInspectorSize = 15;
        }
    }

  };

  gutterClickPlanningSpectrum(e: {gutterNum: number, sizes: Array<number>}){

      if(this.action.isVisibleSpectrumDisplaySize > 0) {
          this.action.PlanningSizeWithSpectrum += this.action.isVisibleSpectrumDisplaySize;
          this.action.isVisibleSpectrumDisplaySize = 0;
      } else if(this.action.PlanningSizeWithSpectrum > 30) {
          this.action.PlanningSizeWithSpectrum -= 30;
          this.action.isVisibleSpectrumDisplaySize = 30;
      } else {
          this.action.isVisibleSpectrumDisplaySize = 30;
          this.action.PlanningSizeWithSpectrum = 70;

      }
  }
  dragEnd(e: {gutterNum: number, sizes: Array<number>}) {

    this.action.isVisibleParticipantsSize = e.sizes[0];
    this.action.isVisiblePlanningBoardSize = e.sizes[1];
    this.action.isVisiblePropertyInspectorSize = e.sizes[2];

}

  ngOnDestroy() {
    if (this.subscription) { this.subscription.unsubscribe(); }
}

}
