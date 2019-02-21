import { Component, OnInit } from '@angular/core';

import { EsriModuleProvider } from 'angular-esri-components';



@Component({
  selector: 'app-planning-board-view',
  templateUrl: './planning-board-view.component.html',
  styleUrls: ['./planning-board-view.component.scss']
})
export class PlanningBoardViewComponent implements OnInit {

  ngOnInit() {
  }

  private _opened: boolean = false;
  private _modeNum: number = 0;
  private _positionNum: number = 0;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = true;
  private _closeOnClickBackdrop: boolean = true;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = true;
  private _keyClose: boolean = false;
  private _autoCollapseHeight: number = null;
  private _autoCollapseWidth: number = null;

  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  mapProperties: __esri.MapProperties = {
    basemap: 'dark-gray'
  };

  mapViewProperties: __esri.MapViewProperties = {
    center: [-118, 34.5],
    zoom: 8
  };

  map: __esri.Map;
  mapView: __esri.MapView;

  constructor(private moduleProvider: EsriModuleProvider) { }

  onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;
    // add a layer with sublayers to map
    this.moduleProvider
      .require(['esri/layers/MapImageLayer'])
      .then(
        ([MapImageLayer]) => {
          const layer = new MapImageLayer({
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer',
            sublayers: [
              {
                id: 3,
                title: 'States',
                visible: false
              },
              {
                id: 2,
                title: 'Railroads',
                visible: true
              },
              {
                id: 1,
                title: 'Highways',
                visible: true
              },
              {
                id: 0,
                title: 'Cities',
                visible: true

              }
            ]
          });
          this.map.layers.add(layer);

        });

  }

 
  
  public _toggleOpened(): void {
    this._opened = !this._opened;
  }

  private _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  private _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  private _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  public _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  private _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  private _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  private _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  private _onOpenStart(): void {
    console.info('Sidebar opening');
  }

  private _onOpened(): void {
    console.info('Sidebar opened');
  }

  private _onCloseStart(): void {
    console.info('Sidebar closing');
  }

  private _onClosed(): void {
    console.info('Sidebar closed');
  }

  private _onTransitionEnd(): void {
    console.info('Transition ended');
  }

  private _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }

}
