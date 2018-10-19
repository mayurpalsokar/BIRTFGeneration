import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Pipe } from '@angular/core';
import { HttpModule, Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({ name: 'filter' })
export class FilterPipe {
  transform(value, filters) {

    var filter = function (obj, filters) {
      return Object.keys(filters).every(prop => obj[prop] === filters[prop])
    }

    return value.filter(obj => filter(obj, filters[0]));
  }
}


@Pipe({ name: 'filter1' })
export class FilterPipe1 {
  transform(value, filters) {

    var filter = function (obj, filters) {
      return Object.keys(filters).every(prop => obj[prop] === filters[prop])
    }

    return value.filter(obj => filter(obj, filters[0]));
  }
}


@Pipe({ name: 'filter2' })
export class FilterPipe2 {
  transform(value, filters) {

    var filter = function (obj, filters) {
      return Object.keys(filters).every(prop => obj[prop] === filters[prop])
    }

    return value.filter(obj => filter(obj, filters[0]));
  }
}


@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.scss']
})

export class EditdataComponent implements OnInit {

  fields: Array<Field>;
  savedfields: Array<Field>;
  editFieldData: string = '-1';

  rows: Array<Row>;
  jsondata: Array<Data>;

  ngOnInit() {

    this.fields = [
      { id: 1, label: 'Operating Unit', tag: '<?OPERATING_UNIT?>', required: true },
      { id: 2, label: 'Start Date', tag: '<?START_DATE?>', required: true },
      { id: 3, label: 'End Date', tag: '<?END_DATE?>', required: true },
      { id: 4, label: 'Invoice Number', tag: '<?INV_NUM?>', required: false },
      { id: 5, label: 'Supplier Number', tag: '<?SUPPLIER_NUMBER?>', required: false },
      { id: 5, label: 'Site Number', tag: '<?SITE_NUMBER?>', required: false },
    ];


    this.rows = [{
      columnCount: 1, type: 'prompt'
    }];

    this.jsondata = [{
      "output": [{
        "uniqueRowName": "false",
        "rootName": "DATA_DS",
        "nodeList": [{
          "name": "data-structure",
          "dataStructure": [{
            "tagName": "DATA_DS",
            "group": [{
              "name": "G_PERSON_DETAILS",
              "source": "Employee Assignment Details Report",
              "label": "G_PERSON_DETAILS",
              "element": [
                {
                  "value": "PERSON_NUMBER",
                  "name": "PERSON_NUMBER",
                  "label": "PERSON_NUMBER",
                  "breakOrder": "ascending",
                  "dataType": "string",
                  "fieldOrder": "1"
                },
                {
                  "value": "FIRST_NAME",
                  "name": "FIRST_NAME",
                  "label": "FIRST_NAME",
                  "breakOrder": "",
                  "dataType": "string",
                  "fieldOrder": "2"
                },
                {
                  "value": "LAST_NAME",
                  "name": "LAST_NAME",
                  "label": "LAST_NAME",
                  "breakOrder": "",
                  "dataType": "string",
                  "fieldOrder": "3"
                }
              ],
              "group": [{
                "name": "G_ASSIGNMENT_DETAILS",
                "source": "Employee Assignment Details Report",
                "label": "G_ASSIGNMENT_DETAILS",
                "element": [
                  {
                    "value": "ASSIGNMENT_NUMBER",
                    "name": "ASSIGNMENT_NUMBER",
                    "label": "ASSIGNMENT_NUMBER",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "4"
                  },
                  {
                    "value": "ASSIGNMENT_NAME",
                    "name": "ASSIGNMENT_NAME",
                    "label": "ASSIGNMENT_NAME",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "5"
                  },
                  {
                    "value": "ASSIGNMENT_START_DATE",
                    "name": "ASSIGNMENT_START_DATE",
                    "label": "ASSIGNMENT_START_DATE",
                    "breakOrder": "",
                    "dataType": "date",
                    "fieldOrder": "6",
                    "formatMask": ""
                  },
                  {
                    "value": "ASSIGNMENT_END_DATE",
                    "name": "ASSIGNMENT_END_DATE",
                    "label": "ASSIGNMENT_END_DATE",
                    "breakOrder": "",
                    "dataType": "date",
                    "fieldOrder": "7",
                    "formatMask": ""
                  },
                  {
                    "value": "PRIMARY_FLAG",
                    "name": "PRIMARY_FLAG",
                    "label": "PRIMARY_FLAG",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "8"
                  },
                  {
                    "value": "ACTION_CODE",
                    "name": "ACTION_CODE",
                    "label": "ACTION_CODE",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "9"
                  },
                  {
                    "value": "EMPLOYMENT_CATEGORY",
                    "name": "EMPLOYMENT_CATEGORY",
                    "label": "EMPLOYMENT_CATEGORY",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "10"
                  },
                  {
                    "value": "ORGANIZATION_NAME",
                    "name": "ORGANIZATION_NAME",
                    "label": "ORGANIZATION_NAME",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "11"
                  },
                  {
                    "value": "JOB_CODE",
                    "name": "JOB_CODE",
                    "label": "JOB_CODE",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "12"
                  },
                  {
                    "value": "JOB_NAME",
                    "name": "JOB_NAME",
                    "label": "JOB_NAME",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "13"
                  },
                  {
                    "value": "LOCATION_CODE",
                    "name": "LOCATION_CODE",
                    "label": "LOCATION_CODE",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "14"
                  },
                  {
                    "value": "LOCATION_NAME",
                    "name": "LOCATION_NAME",
                    "label": "LOCATION_NAME",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "15"
                  },
                  {
                    "value": "POSITION_CODE",
                    "name": "POSITION_CODE",
                    "label": "POSITION_CODE",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "16"
                  },
                  {
                    "value": "POSITION_NAME",
                    "name": "POSITION_NAME",
                    "label": "POSITION_NAME",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "17"
                  },
                  {
                    "value": "GRADE_CODE",
                    "name": "GRADE_CODE",
                    "label": "GRADE_CODE",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "18"
                  },
                  {
                    "value": "BARGAINING_UNIT_CODE",
                    "name": "BARGAINING_UNIT_CODE",
                    "label": "BARGAINING_UNIT_CODE",
                    "breakOrder": "",
                    "dataType": "string",
                    "fieldOrder": "19"
                  }
                ]
              }]
            }]
          }]
        }]
      }],
      // "parameter": [
      //    {
      //       "name": "PERSON_NUMBER",
      //       "dataType": "string",
      //       "rowPlacement": "1",
      //       "input": {
      //          "label": "Person Number"
      //       }
      //    },
      //    {
      //     "name": "ASSIGNMENT_NUMBER",
      //     "dataType": "string",
      //     "rowPlacement": "1",
      //     "input": {
      //        "label": "Assignment Number"
      //     }
      //    }
      // ]

      "parameters": [{
        "parameter": [
          {
            "name": "PERSON_NUMBER",
            "dataType": "string",
            "rowPlacement": "1",
            "type": "mandatory",
            "selected": false,
            "input": [{
              "label": "Person Number"
            }]
          },
          {
            "name": "ASSIGNMENT_NUMBER",
            "dataType": "string",
            "rowPlacement": "2",
            "type": "mandatory",
            "selected": false,
            "input": [{
              "label": "Assignment Number"
            }]
          },
          {
            "name": "ORGANIZATION_NAME",
            "dataType": "string",
            "rowPlacement": "3",
            "type": "recommended",
            "selected": false,
            "input": [{
              "label": "Organization"
            }]
          },
          {
            "name": "EMPLOYMENT_CATEGORY",
            "dataType": "string",
            "rowPlacement": "4",
            "type": "optional",
            "selected": false,
            "input": [{
              "label": "Employment Category"
            }]
          }
        ]
      }]

    }
    ]

  }

  constructor(private router: Router, private http: HttpClient) {

  }


  // Route to Create Page
  Create() {

    this.router.navigate(['create']);

    // to save json file
    let json = { document: this.fields }
    this.postRquest(json)

  }


  //Service to Write JSonData in a file
  response: any[];


  postRquest(body) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (body == null) {
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('title', 'hi');
      let body = urlSearchParams.toString();
    }

    return this.http.post('http://127.0.0.1:800/paramJsonData', body)
      .toPromise()
      .then(response => {
        return response
      })
      .catch(error => {
      });
  }

  // Handle buttons
  // EditBtnClicked: boolean = false;
  SaveBtnClicked: boolean = false;
  DiscardBtnClicked: boolean = false;
  BackupTemplateData: Array<Field> = [];
  checkboxClicked: boolean = false;
  AddParambtnClicked: boolean = false;

  // showNxtBtnClicked1: boolean = true;
  // showNxtBtnClicked2: boolean = false;

  // Edit(clicked: boolean) {
  //   this.EditBtnClicked = clicked;
  //   // this.BackupTemplateData = JSON.parse(JSON.stringify(this.fields));
  //   this.showNxtBtnClicked1 = false;

  // }

  Discard(clicked: boolean) {
    this.DiscardBtnClicked = clicked;
    this.SaveBtnClicked = false
    // this.EditBtnClicked = false;
    this.checkboxClicked = false;
    this.AddParambtnClicked = false;


    this.ngOnInit()

  }

  Save(clicked: boolean) {
    this.SaveBtnClicked = clicked;
    // this.EditBtnClicked = false;
    this.checkboxClicked = clicked;
    // this.showNxtBtnClicked1 = clicked;

  }


  AddParameter(clicked) {
    //this.fields[rowIndex].params.push({});
    this.AddParambtnClicked = clicked;
    // this.words2.push({value: 'gsre'});
  }

  index: number;



  //public Selected(values:any) 
  public Selected(event) {
    // console.log(event);
    console.log(this.jsondata[0].parameters[0].parameter[0].length);
    console.log(event.target.value);


    // console.log(event.target.checked);

    // for (var i = 0; i < this.fields.length; i++) {

    //   if (this.fields[i].label == event.target.value) {
    //     this.fields[i].required = true;
    //     }
    //   Object.assign(this.fields, this.fields);
    // }
    // // console.log(JSON.stringify(this.fields))


    for (var i = 0; i < this.jsondata.length; i++) {

      //let updateItem = this.jsondata[i].parameters[i].parameter.find(this.findIndexToUpdate, event.target.value);

      //  let index = this.jsondata.indexOf(event.target.value);


      // this.index = this.jsondata[i].parameters[i].parameter[i].input.findIndex(x => x.label==event.target.value);

      //console.log(this.index); 
      if (this.jsondata[i].parameters[i].parameter[i].input[i].label = event.target.value) {
        console.log('inside');
        console.log(this.jsondata[i].parameters[i].parameter[i].input[i].label);
        console.log(event.target.value);
        console.log(i);
        this.jsondata[i].parameters[i].parameter[i].selected = true;
      }
    }


  }

  findIndexToUpdate(obj) {
    return obj.rowPlacement === this;
  }

  public row: any = [{}];
  // Add New Row
  addRow() {
    this.row.push({});
  }

  // Delete Rows
  deleteRow(index: number) {
    this.row.splice(index, 1);
  }

  // Get All Row Values
  getRowValue() {
    console.log(this.row);
  }


}

interface Field {
  id: number;
  showBorder?: boolean;
  label: string;
  tag?: string;
  length?: number;
  // checked?: boolean;
  required: boolean
  //params: [{}]
}

interface Row {
  columnCount: number;
  type: string;
  showBorder?: boolean;
}


interface Data {
  output: Array<OutputList>;
  // parameter: Array<ParameterList>;
  parameters: Array<ParametersList>;
  length?: number;
}

interface OutputList {
  uniqueRowName?: string;
  rootName?: string;
  nodeList: Array<NodeList>;
}

interface NodeList {
  name: string;
  dataStructure: Array<DataStructureList>;
}

interface DataStructureList {
  tagName: string;
  group: Array<GroupList>;
}

interface GroupList {
  name: string;
  source: string;
  label: string;
  element: Array<ElementList>;
  group: Array<GroupList>;
}

interface ElementList {
  value: string;
  name: string;
  label: string;
  breakOrder: string;
  dataType: string;
  fieldOrder: string;
}

interface ParametersList {
  parameter: Array<ParameterList>;
  length?: number;
}

interface ParameterList {
  name: string,
  dataType: string,
  rowPlacement: string,
  type: string,
  selected: boolean,
  input: Array<InputList>;
  length?: number;
}

interface InputList {
  label: string
}

