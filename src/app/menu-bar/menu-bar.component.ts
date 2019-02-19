import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { ViewsService } from '../views.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-menu-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  providers:  [ ViewsService ]
})
export class MenuBarComponent implements OnInit {

  isVisibleParticipants: boolean;
  isVisiblePlanningBoard: boolean;
  isVisiblePropertyInspector: boolean;
  isVisibleSpectrumDisplay: boolean;

  subscription: Subscription;

  @Input() action = this.toggleService.action;

  @Output() visibleParticipant = new EventEmitter<boolean>();
  @Output() visiblePlanningBoard = new EventEmitter<boolean>();
  @Output() visibleProperty = new EventEmitter<boolean>();
  @Output() visibleSpectrumDisplay = new EventEmitter<boolean>();

  constructor(private toggleService: ViewsService ) { }

  ngOnInit() {
   this.toggleService.currentVisible.subscribe(isVisibleParticipants => this.isVisibleParticipants = isVisibleParticipants);
  }

  changeParticipants(action: any) {
    this.action.isVisibleParticipants = !this.action.isVisibleParticipants;
    this.visibleParticipant.emit(this.action.isVisibleParticipants);
    console.log('var: '+ this.action.isVisibleParticipants);
  }

  changePlanningView(action: any) {
    this.action.isVisiblePlanningBoard = !this.action.isVisiblePlanningBoard;
    this.visiblePlanningBoard.emit(this.action.isVisiblePlanningBoard);
    console.log('var: '+ this.action.isVisiblePlanningBoard);
  }

  changePropertyInpector(action: boolean) {
    this.action.isVisiblePropertyInspector = !this.action.isVisiblePropertyInspector;
    this.visibleProperty.emit(this.action.isVisiblePropertyInspector);
    console.log('var: '+ this.action.isVisiblePropertyInspector);
  }

  changeSpectrumDisplay(action: boolean) {
    this.action.isVisibleSpectrumDisplay = !this.action.isVisibleSpectrumDisplay;
    this.visibleSpectrumDisplay.emit(this.action.isVisibleSpectrumDisplay);
    console.log('var: '+ this.action.isVisibleSpectrumDisplay);
  }
  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

 


}
