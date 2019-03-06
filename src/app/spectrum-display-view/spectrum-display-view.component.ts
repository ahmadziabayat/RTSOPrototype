import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spectrum-display-view',
  templateUrl: './spectrum-display-view.component.html',
  styleUrls: ['./spectrum-display-view.component.scss']
})
export class SpectrumDisplayViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public graph = {
    data: [
        { x: [0.3, 10025.225, 20050.15, 30076.075, 40100], y: [2, 6, 3, 4, 1], type: 'scatter', mode: 'lines+markers', marker: {color: 'red', symbol:"cross"} },
        { x: [0.3, 10025.225, 20050.15, 30076.075, 40100], y: [2, 5, 3, 6, 0], type: 'scatter', mode: 'lines+markers' },
    ],
    layout: { height: 218, margin:{l: 30,r: 10,b: 30,t: 0,pad: 4}, autosize: true,
    title: {text:'', xref:'container', yref:'container'}, 
    font: {family:'sans-serif', size: 10},  showlegend: false,
     xaxis:{title:{text:'Frequency (MHz)'},  autorange:true, rangemode:'tozero', range:[0-12895.647] },
     yaxis:{title:{text:'Cumulative P'}, autorange:true, rangemode:'nonnegative', fixedrange: true} },

    config: {responsive: true, scrollZoom: true, editable: true, displayModeBar: false,},
    
    style: { position: 'relative', display: 'inline-block'},
    
};



}
