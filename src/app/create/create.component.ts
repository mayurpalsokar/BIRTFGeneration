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
    let json = { document: this.rows}
    this.postRquest(json);

    let logoURLjson = { logoURL : this.logoURL }
    this.SaveLogo(logoURLjson);
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
  }

  Save(clicked: boolean) {
    this.SaveBtnClicked = clicked;
    this.BackupTemplateData = JSON.parse(JSON.stringify(this.rows));
    this.EditBtnClicked = false;
  }
  CurrentDate = new Date();
  CurrentDateVar = this.datepipe.transform(this.CurrentDate, 'dd/MM/yyyy');
  CurrentDateVar1 = this.datepipe.transform(this.CurrentDate, ' dd/MMM/yyyy');
  CurrentDateVar2 = this.datepipe.transform(this.CurrentDate, ' dd/MMM/yyyy hh:mm:ss');


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

