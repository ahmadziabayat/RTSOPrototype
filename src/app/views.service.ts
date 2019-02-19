import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  action = {
    isVisibleParticipantsSize: 15,
    isVisiblePlanningBoardSize: 70,
    isVisiblePropertyInspectorSize: 15,
    isVisibleSpectrumDisplaySize: 25,
    isVisibleParticipants: true,
    isVisiblePlanningBoard: true,
    isVisiblePropertyInspector: true,
    isVisibleSpectrumDisplay: true,
    isPresentA: true,
    isPresentB: true,
    isPresentC: true,
    useTransition: true,
    logs: ''
}

  @Output() showParticipants: EventEmitter<any> = new EventEmitter();
  @Output() hideParticipants: EventEmitter<any> = new EventEmitter();

  toggleParticipants(){
    console.log('start toggle');
    this.action.isVisibleParticipants = !this.action.isVisibleParticipants;
    console.log("check: "+this.action.isVisibleParticipants);
    if(this.action.isVisibleParticipants){
      this.showParticipants.emit(null);
    }else{
      this.hideParticipants.emit(null);
    }
    console.log('end');
  }

  constructor() { }






log(eventName, e) {
    this.action.logs = `${ new Date() }: ${ eventName } > ${ e }\n${ this.action.logs }`;
}
}
