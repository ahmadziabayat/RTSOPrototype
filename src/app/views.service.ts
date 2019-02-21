import { Injectable, EventEmitter, Output, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {
   
  
  action = {
    isVisibleParticipantsSize: 15,
    isVisiblePlanningBoardSize: 70,
    isVisiblePropertyInspectorSize: 15,
    isVisibleSpectrumDisplaySize: 20,
    isVisibleMainDisplaySize: 80,
    isVisibleParticipants: true,
    isVisiblePlanningBoard: true,
    isVisiblePropertyInspector: true,
    isVisibleSpectrumDisplay: true,
    useTransition: true,
    logs: ''
}

private isVisible = new BehaviorSubject<boolean>(this.action.isVisibleParticipants);

currentVisible = this.isVisible.asObservable();


constructor() { }



}
