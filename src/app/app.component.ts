import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ViewsService } from './views.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [ ViewsService ]
})
export class AppComponent {
  title = 'RTSOPrototype';

  constructor(private viewService: ViewsService ) { }

  action = this.viewService.action;

//   action = {
//     isVisibleParticipantsSize: 15,
//     isVisiblePlanningBoardSize: 70,
//     isVisiblePropertyInspectorSize: 15,
//     isVisibleSpectrumDisplaySize: 25,
//     isVisibleParticipants: true,
//     isVisiblePlanningBoard: true,
//     isVisiblePropertyInspector: true,
//     isVisibleSpectrumDisplay: true,
//     isPresentA: true,
//     isPresentB: true,
//     isPresentC: true,
//     useTransition: true,
//     logs: ''
// }

// log(eventName, e) {
//     this.action.logs = `${ new Date() }: ${ eventName } > ${ e }\n${ this.action.logs }`;
// }
}
