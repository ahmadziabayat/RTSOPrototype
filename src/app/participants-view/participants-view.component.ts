import { Component, OnInit, ViewChild } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-participants-view',
  templateUrl: './participants-view.component.html',
  styleUrls: ['./participants-view.component.scss']
})
export class ParticipantsViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData: any;
  private domLayout;

  style = {
    marginTop: '20px',
    width: '600px',
    height: '600px',
    boxSizing: 'border-box'
};

@ViewChild('agGrid') agGrid;



  constructor(private http: HttpClient) {
    this.columnDefs = [
      {headerName: 'Make', field: 'make', checkboxSelection: true},
      {headerName: 'Model', field: 'model'},
      {headerName: 'Price', field: 'price'}
  ];
  this.defaultColDef = {
    resizable: true,
    enableRowGroup: true,
    enableValue: true,
    filter: true,
    sortable: true,
  };
   }

   onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
    };

   onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("assets/vehicles.json")
      .subscribe(data => {
        this.rowData = data;
      });

  }

  ngOnInit() {
    // this.rowData = this.http.get('assets/vehicles.json');
  }







  nodes = [
    {
      id: 1,
      name: 'ABU QIR',
      children: [
        { id: 2, name: 'Radar/Combat Systems',
      children:[
        {id: 10, name: 'DA-05'},
        {id: 11, name: 'WM-25 ASPIDE CWI'},
        {id: 12, name: 'ZW-06'}
      ] },
        { id: 3, name: 'Communication Systems',
      children: [
        {id: 20, name: 'Net Hosts'},
        {id: 21, name: 'Non-Net Hosts'}
      ] },
        {id: 4, name: 'NAVAIDs',
      children: [
        {id: 30, name:'GPS'}
      ]}
      ]
    },
    {
      id: 5,
      name: 'ADAK (WPB 1333)',
      children: [
        { id: 6, name: 'Radar/Combat Systems',
      children:[
        {id: 40, name: 'SPS-73 (X BAND)'},
        {id: 41, name: 'SPY-1A'},
      ] },
        { id: 7, name: 'Communication Systems',
      children: [
        {id: 50, name:'Net Hosts',
        children:[
          {id: 100, name: 'PSC-5D [3/3]'},
          {id: 101, name: 'R-2368/URR[4/4]'},
          {id: 102, name: 'XTL-5000[2/2]'}
        ]
        },
        {id: 51, name: 'Non-Net Hosts'}
      ] },
        {id: 8, name: 'NAVAIDs',
      children: [
        {id: 60, name:'GPS'}
      ]}
      ]
    }
  ];
  options: ITreeOptions = {
    isExpandedField: 'expanded',
    idField: 'uuid',
    hasChildrenField: 'nodes',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        }
      }
    },
    // nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    allowDragoverStyling: true,
    levelPadding: 10,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    scrollContainer: document.documentElement // HTML
  }

}
