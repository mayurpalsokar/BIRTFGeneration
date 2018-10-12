import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpModule, Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from "@angular/router";
import { sharedService } from '../home/shared.service';
//import { Subscription }   from 'rxjs/Subscription';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  rows: Array<Row>;
  fields: Array<Field>;
  parameters: Array<Field>;
  selectedRow: number = 0;
  selectedColumn: number = 0;
  editFieldData: string = '-1';
  templateEditMode: boolean = false;
  isHeader: boolean;
  headerText: string;
  isFooter: boolean;
  footerText: string;
  logoURL: any = "https://via.placeholder.com/100x50";

  jsondata: Array<Data>;

  ngOnInit() {
    this.fields = [
      { id: 1, label: 'AP Invoice Print Report' },
      { id: 2, label: 'Operating Unit: ' },
      { id: 13, label: 'Operating Unit', tag: '<?NAME?>' },
      { id: 14, label: 'Date', tag: '<?SYSTEM_DATE?>' },
      { id: 3, label: 'PAYMENT_METHOD' },
      { id: 4, label: 'INVOICE_AMOUNT' },
      { id: 5, label: 'Total Records Included: ' },
      { id: 6, label: 'TRX_TYPE', tag: '<?TRX_TYPE?>' },
      { id: 7, label: 'TRX_NUMBER', tag: '<?TRX_NUMBER?>' },
      { id: 8, label: 'BILL_CUST_NAME', tag: '<?BILL_CUST_NAME?>' },
      { id: 9, label: 'Site Name', tag: '<?SITE_NAME?>' },
      { id: 10, label: 'Site Number', tag: '<?SITE_NUMBER?>' },
      { id: 11, label: 'Attribute1', tag: '<?ATTRIBUTE1?>' },
      { id: 12, label: 'Attribute2', tag: '<?ATTRIBUTE2?>' },
    ];
    this.parameters = [
      { id: 13, label: 'Operating Unit', tag: '<?NAME?>', parameter: true },
      { id: 14, label: 'Date', tag: '<?SYSTEM_DATE?>', parameter: true },
      { id: 6, label: 'TRX_TYPE', tag: '<?TRX_TYPE?>', parameter: true },
      { id: 7, label: 'TRX_NUMBER', tag: '<?TRX_NUMBER?>', parameter: true }
    ];
    this.rows = [{
      columnCount: 1, type: 'prompt', columns: [{}]
    }];
    this.rows = [
      {
        "columnCount": 1,
        "type": "prompt",
        "columns": [
          {
            "inDropZone": false,
            "field": {
              "id": 1,
              // "label": "Active Customer Report"
              "label": ""
            },
            "alignment": "C"
          }
        ]
      },
      {
        "columnCount": 1,
        "type": "prompt",
        "columns": [
          {
            "inDropZone": false,
            "field": {
              "id": 2,
              "label": "Operating Unit: "
            },
            "alignment": "R"
          },
          {
            "inDropZone": false,
            "field": {
              "id": 13,
              "label": "Operating Unit",
              "tag": "<?NAME?>"
            },
            "alignment": "L"
          },
          {
            "inDropZone": false,
            "field": {
              "id": 3,
              "label": "Date: "
            },
            "alignment": "R"
          },
          {
            "inDropZone": false,
            "field": {
              "id": 14,
              "label": "Date",
              "tag": "<?SYSTEM_DATE?>"
            },
            "alignment": "L"
          }
        ]
      },
      {
        "columnCount": 1,
        "type": "prompt",
        "columns": [
          {
            "inDropZone": false
          }
        ]
      },
      {
        "columnCount": 1,
        "type": "prompt",
        "columns": [
          {
            "inDropZone": false,
            "field": {
              "id": 4,
              "label": "Customer Name: "
            },
            "alignment": "L"
          },
          {
            "inDropZone": false,
            "field": {
              "id": 6,
              "label": "Primary Customer Number",
              "tag": "<?P_CUSTOMER_NUMBER?>"
            },
            "alignment": "L"
          },
          {
            "inDropZone": false
          }
        ]
      },
      {
        "columnCount": 1,
        "type": "prompt",
        "columns": [
          {
            "inDropZone": false
          },
          {
            "inDropZone": false
          },
          {
            "inDropZone": false
          }
        ]
      },
      {
        "columnCount": 1,
        "type": "table",
        "columns": [
          {
            "inDropZone": false,
            "field": {
              "id": 7,
              "label": "Customer Name",
              "tag": "<?CUST_NAME?>"
            },
            "alignment": "L"
          },
          {
            "inDropZone": false,
            "field": {
              "id": 8,
              "label": "Customer Number",
              "tag": "<?CUST_NUM?>"
            },
            "alignment": "L"
          },
          {
            "inDropZone": false,
            "field": {
              "id": 9,
              "label": "Site Name",
              "tag": "<?SITE_NAME?>"
            },
            "alignment": "L"
          },
          {
            "inDropZone": false,
            "field": {
              "id": 10,
              "label": "Site Number",
              "tag": "<?SITE_NUMBER?>"
            },
            "alignment": "L"
          },
          {
            "inDropZone": false,
            "field": {
              "id": 11,
              "label": "Attribute1",
              "tag": "<?ATTRIBUTE1?>"
            },
            "alignment": "L"
          },
          {
            "inDropZone": false,
            "field": {
              "id": 12,
              "label": "Attribute2",
              "tag": "<?ATTRIBUTE2?>"
            },
            "alignment": "L"
          }
        ]
      }
    ];


    // Start: Added by Mayur

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
            "selected":false,
            "input": [{
              "label": "Person Number"
            }]
          },
          {
            "name": "ASSIGNMENT_NUMBER",
            "dataType": "string",
            "rowPlacement": "2",
            "type": "mandatory",
            "selected":false,
            "input": [{
              "label": "Assignment Number"
            }]
          },
          {
            "name": "ORGANIZATION_NAME",
            "dataType": "string",
            "rowPlacement": "3",
            "type": "recommended",
            "selected":false,
            "input": [{
              "label": "Organization"
            }]
          } ,
          {
            "name": "EMPLOYMENT_CATEGORY",
            "dataType": "string",
            "rowPlacement": "4",
            "type": "optional",
            "selected":false,
            "input": [{
              "label": "Employment Category"
            }]
          }  
        ]
      }]

    }
    ]
  
    // End: Added by Mayur
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.logoURL = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  selectField(rowIndex, columnIndex) {
    this.selectedRow = rowIndex;
    this.selectedColumn = columnIndex;
  }

  editField() {
    this.editFieldData = this.rows[this.selectedRow].columns[this.selectedColumn].field.label;
  }
  updateEdit() {
    this.rows[this.selectedRow].columns[this.selectedColumn].field.label = this.editFieldData;
    this.editFieldData = "-1";
  }

  rightAlignField() {
    this.rows[this.selectedRow].columns[this.selectedColumn].alignment = "R";
  }
  leftAlignField() {
    this.rows[this.selectedRow].columns[this.selectedColumn].alignment = "L";
  }
  centerAlignField() {
    this.rows[this.selectedRow].columns[this.selectedColumn].alignment = "C";
    console.log(JSON.stringify(this.rows));
  }

  toggleBorderField() {
    if (this.rows[this.selectedRow].columns[this.selectedColumn].field.showBorder) {
      this.rows[this.selectedRow].columns[this.selectedColumn].field.showBorder = !this.rows[this.selectedRow].columns[this.selectedColumn].field.showBorder;
    } else {
      this.rows[this.selectedRow].columns[this.selectedColumn].field.showBorder = true;
    }
  }
  addRow(index) {
    let tColumns = [];
    for (let i = 0; i < this.rows[index].columns.length; i++) {
      tColumns.push({});
    }
    if (index == this.rows.length - 1 || index == 0) {
      this.rows.push({ columnCount: 1, type: 'prompt', columns: tColumns });
    } else {
      this.rows.splice(index, 0, { columnCount: 1, type: 'prompt', columns: tColumns });
    }
  }
  removeRow(index) {
    this.rows.splice(index, 1);
    this.selectedRow = index - 1;
  }
  addField(field) {
    this.fields.push(field);
  }
  removeField(field: Field) {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].label == field.label) {
        this.fields.splice(i, 1);
        break;
      }
    }
  }
  toggleType(rowIndex) {
    if (this.rows[rowIndex].type == 'prompt')
      this.rows[rowIndex].type = 'table';
    else
      this.rows[rowIndex].type = 'prompt';
  }

  toggleBorderRow(rowIndex) {
    this.rows[rowIndex].showBorder = !!!this.rows[rowIndex].showBorder;
  }

  toggleHeader() {
    this.isHeader = !this.isHeader;
  }
  toggleFooter() {
    this.isFooter = !this.isFooter;
  }
  generate(rowIndex) {
    let count = this.rows[rowIndex].columnCount;
    let existingCount = this.rows[rowIndex].columns.length;
    if (count > existingCount) {
      for (let i = existingCount; i < count; i++) {
        this.rows[rowIndex].columns.push({});
      }
    }
    if (count < existingCount) {
      this.rows[rowIndex].columns.splice(count - 1, existingCount - count);
    }
  }

  addColumn(rowIndex) {
    this.rows[rowIndex].columns.push({});
  }

  onFieldDragStart(event, fieldRef) {
    event.dataTransfer.setData('text', JSON.stringify(fieldRef));
    console.log(JSON.stringify(fieldRef));
  }

  onFieldDragOver(event, rowIndex, columnIndex) {
    event.preventDefault();
    this.rows[rowIndex].columns[columnIndex].inDropZone = true;
  }
  onFieldDragLeave(event, rowIndex, columnIndex) {
    this.rows[rowIndex].columns[columnIndex].inDropZone = false;
  }

  onFieldDrop(event, rowIndex, columnIndex) {
    let fieldRef: Field = JSON.parse(event.dataTransfer.getData('text'));
    if ((this.rows[rowIndex].columns[columnIndex].field)) {
      this.addField(this.rows[rowIndex].columns[columnIndex].field);
    }
    this.selectedRow = rowIndex;
    this.selectedColumn = columnIndex;
    this.rows[rowIndex].columns[columnIndex].field = fieldRef;
    this.rows[rowIndex].columns[columnIndex].alignment = 'L';
    this.rows[rowIndex].columns[columnIndex].inDropZone = false;

    this.removeField(fieldRef);
  }
  removeColumnField(rowIndex, columnIndex) {
    if (this.rows[rowIndex].columns[columnIndex].field) {
      this.addField(this.rows[rowIndex].columns[columnIndex].field);
      this.rows[rowIndex].columns[columnIndex] = {};
      this.selectedColumn = 0;
    } else {
      if (this.rows[rowIndex].columns.length > 1)
        this.rows[rowIndex].columns.splice(columnIndex, 1);
      this.selectedColumn = 0;
    }
  }



  // Mayur's code starts from here
  restItems: any;
  restItemsUrl = 'http://10.12.186.177:8082/RTF/rest/executertf';
  public ReportName = window.sessionStorage.getItem('reportname')

  constructor(private http: HttpClient, private router: Router, public shared: sharedService,
    public datepipe: DatePipe) {

  }

  headerDate: string;
  footerPgNo: string;

  GenerateRTF(clicked: boolean) {
    this.GenerateBtnClicked = clicked;
    this.EditBtnClicked = false;


    this.getRestItems();

    //window.sessionStorage.setItem('rtfdownloadurl',this.restItems);

    // to save json file
    // let json = { document: this.rows,
    //              headerText:   this.headerText,
    //              headerDate:   this.headerDate,
    //              footerText:  this.footerText,
    //              footerPgNo:  this.footerPgNo }
    let json = { document: this.rows }
    this.postRquest(json);

    let logoURLjson = { logoURL: this.logoURL }
    this.SaveLogo(logoURLjson);

    let headerfooterjson = {
      document: [
        {
          header: {
            logo: "Logoimage.png",
            text: this.headerText,
            date: this.headerDate,
          },
          footer: {
            text: this.footerText,
            pagenumber: this.footerPgNo,
          }
        }
      ]
    }
    this.writeheaderfooterlogo(headerfooterjson)
  }

  // Service to generate RTF and get download url
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
          // window.sessionStorage.setItem('rtfdownloadurl',this.restItems[0].url);
          //console.log(this.restItems[0].url);
        }
      )
  }

  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }


  //Service to Write RTF JSonData in a file
  // response: any[];
  postRquest(body) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (body == null) {
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('title', 'hi');
      let body = urlSearchParams.toString();
    }

    return this.http.post('http://127.0.0.1:800/finalJsonData', body)
      .toPromise()
      .then(response => {
        return response
      })
      .catch(error => {
      });
  }

  //Service to save logo
  SaveLogo(body) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (body == null) {
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('title', 'hi');
      let body = urlSearchParams.toString();
    }

    return this.http.post('http://127.0.0.1:800/file_upload', body)
      .toPromise()
      .then(response => {
        return response
      })
      .catch(error => {
      });
  }


  //Service to write header footer and logo details
  writeheaderfooterlogo(body) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (body == null) {
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('title', 'hi');
      let body = urlSearchParams.toString();
    }

    return this.http.post('http://127.0.0.1:800/headerfooterlogo', body)
      .toPromise()
      .then(response => {
        return response
      })
      .catch(error => {
      });
  }


  // Route to Preview Page
  Preview() {

    this.router.navigate(['preview']);
  }


  // Handle buttons
  EditBtnClicked: boolean = false;
  SaveBtnClicked: boolean = false;
  GenerateBtnClicked: boolean = false;
  DiscardBtnClicked: boolean = false;
  BackupTemplateData: Array<Row> = [];
  PreviewBtnClicked: boolean = false;


  Edit(clicked: boolean) {
    this.EditBtnClicked = clicked;
    this.BackupTemplateData = JSON.parse(JSON.stringify(this.rows));
    // Object.assign(this.BackupTemplateData, this.rows);
    this.PreviewBtnClicked = false;
  }

  Discard(clicked: boolean) {
    this.DiscardBtnClicked = clicked;
    this.rows = JSON.parse(JSON.stringify(this.BackupTemplateData));
    // this.rows = Object.assign([], this.BackupTemplateData);
    // this.rows = this.BackupTemplateData;
    Object.assign(this.rows, this.BackupTemplateData);
    this.EditBtnClicked = false;
    this.showDate = false;
    this.showPage = false;

    this.isHeader = !this.isHeader
    this.isFooter = !this.isFooter
  }

  Save(clicked: boolean) {
    this.SaveBtnClicked = clicked;
    this.BackupTemplateData = JSON.parse(JSON.stringify(this.rows));
    this.EditBtnClicked = false;

  }

  CurrentDate = new Date();
  CurrentDateVar = this.datepipe.transform(this.CurrentDate, 'dd/MM/yyyy');
  CurrentDateVar1 = this.datepipe.transform(this.CurrentDate, 'dd/MMM/yyyy');
  CurrentDateVar2 = this.datepipe.transform(this.CurrentDate, 'dd/MMM/yyyy hh:mm:ss');


  // Logic to download RTF on modal window
  public RTFDownloadUrl = window.sessionStorage.getItem('rtfdownloadurl')

  download(clicked: boolean) {

    // window.open("https://www.w3schools.com");
    //window.open(this.RTFDownloadUrl);
    window.open('./assets/AP Invoice Print Report.pdf');
    this.PreviewBtnClicked = clicked;
  }

  showDate: boolean = false;
  showDateFun(clicked) {
    this.showDate = clicked;
  }

  showPage: boolean = false;
  showPageFun(clicked) {
    this.showPage = clicked;
  }
  // Mayur's code Ends from here
}


interface Row {
  columnCount: number;
  type: string;
  columns: Array<Column>;
  showBorder?: boolean;
}
interface Column {
  field?: Field;
  alignment?: string;
  inDropZone?: boolean;
}
interface Field {
  id: number;
  showBorder?: boolean;
  label: string;
  tag?: string;
  length?: number;
  parameter?: true;
}


// Start: Added by Mayur
interface Data {
  output: Array<OutputList>;
  // parameter: Array<ParameterList>;
  parameters: Array<ParametersList>;
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
}

interface ParameterList {
  name: string,
  dataType: string,
  type: string,
  selected: boolean,
  rowPlacement: string,
  input: Array<InputList>;
}

interface InputList {
  label: string
}

