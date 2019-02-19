import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { ViewsService } from '../views.service';


@Component({
  selector: 'app-menu-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  providers:  [ ViewsService ]
})
export class MenuBarComponent implements OnInit {

  constructor(private viewService: ViewsService ) { }

  ngOnInit() {
  }

  @Input() viewsArea: AppComponent;

  toggleParticipants(): void {
   this.viewService.toggleParticipants();
   console.log('applied');
  }


//   action = {
//     isVisibleParticipants: true,
//     isVisiblePlanningBoard: true,
//     isVisiblePropertyInspector: true,
//     isVisibleSpectrumDisplay: true,
//     isPresentA: true,
//     isPresentB: true,
//     isPresentC: true,
//     logs: ''
// }

}
