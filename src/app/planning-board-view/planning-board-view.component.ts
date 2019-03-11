import { Component, OnInit } from '@angular/core';
import { EsriModuleProvider } from 'angular-esri-components';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';


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

  
  map: __esri.Map;
  mapView: __esri.MapView;
  view: __esri.View;
  layerView: __esri.LayerView;



  mapProperties: __esri.MapProperties = {
    basemap: 'hybrid',
    ground: "world-elevation"
  };



  mapViewProperties: __esri.MapViewProperties = {
    center: [-118, 34.5],
    zoom: 7,
    constraints : {
        minZoom: 3,
    },
    // highlightOptions: {
    //   color: [255, 255, 0, 1],
    //   haloOpacity: 0.9,
    //   fillOpacity: 0.8
    // },
    // viewpoint:{
    //   camera:{
    //     heading: 90, // face due east
    //     tilt: 45, // looking from a bird's eye view
    //     position: {
    //       latitude: 38,
    //       longitude: -122,
    //       spatialReference: { wkid: 3857 }
    //     }
    //   }
    // }
  
  };
  
 


  constructor(private moduleProvider: EsriModuleProvider) { }

  onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView, view: __esri.View, layerView: __esri.LayerView}) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;
    this.view = mapInfo.view;
    this.layerView = mapInfo.layerView;

    // add a layer with sublayers to map
    this.moduleProvider
      .require([ "esri/Map",
      "esri/WebMap",
      "esri/views/MapView",
      "esri/Graphic", 
      "esri/layers/MapImageLayer",
      "esri/views/SceneView",
      "esri/views/3d/externalRenderers"])
      .then(
        ([Map, WebMap, MapView, Graphic, MapImageLayer, SceneView, externalRenderers]) => {

          const layer = new MapImageLayer({
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer',
        
          
            sublayers:  [{
              id: 2,
              // labelingInfo autocasts to an array of LabelClass objects
              // this sublayer has two label classes. The first sets the
              // label as the state abbreviation at small scales. When the view
              // zooms to larger scales the whole state name is used instead
              labelingInfo: [{
                labelExpression: "[state_abbr]",
                labelPlacement: "always-horizontal",
                symbol: {
                  type: "text",  // autocasts as new TextSymbol()
                  color: [ 255,255,255,0.85 ],
                  font: {
                    size: 16,
                    weight: "bolder"
                  }
                },
                minScale: 18500000,
                maxScale: 9250000
              }, {
                labelExpression: "[state_name]",
                labelPlacement: "always-horizontal",
                symbol: {
                  type: "text",  // autocasts as new TextSymbol()
                  color: [ 255,255,255,0.85 ],
                  haloColor: "gray",
                  haloSize: 1,
                  font: {
                    size: 14,
                    weight: "bold"
                  }
                },
                minScale: 9250000,
                maxScale: 2400000
              }]
            }]
          });
          this.map.layers.add(layer);
          // this.map.add(webmap);
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
