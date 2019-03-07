import { Injectable, EventEmitter, Output, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {
   
  
  action = {
   isVisibleParticipantsSize: 15, isVisibleParticipants: true, ParticipantsOrder : 0 ,
   isVisiblePlanningBoardSize: 70, PlanningSizeWithSpectrum: 70,  isVisiblePlanningBoard: true, PlanningOrder : 1, 
   isVisiblePropertyInspectorSize: 15,     isVisiblePropertyInspector: true, InspectorOrder:2,
   isVisibleSpectrumDisplaySize: 30, isVisibleSpectrumDisplay: true, SpectrumOrder: 3,
   isVisibleMainDisplaySize: 100,
    
    useTransition: true,
    logs: ''
}

private isVisible = new BehaviorSubject<boolean>(this.action.isVisibleParticipants);
currentVisible = this.isVisible.asObservable();

constructor() { }

}
