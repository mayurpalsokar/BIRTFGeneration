import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpModule, Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  rows: Array<Row>;
  fields: Array<Field>;
  selectedRow: number = 0;
  selectedColumn: number = 0;

  ngOnInit() {
    // this.fields = [];
    // for (let i = 0; i < 10; i++) {
    //   this.fields.push({ id: i, label: 'Field ' + i, tag: '<?field_name: FieldTag ' + i + '?>', length: Math.floor(Math.random() * 30) });
    // }
    // this.fields = [
    //   { id: 1, label: 'Date', tag: '<?DATE?>', length: 10 },
    //   { id: 2, label: 'Address1', tag: '<?ADDRESS1?>', length: 30 },
    //   { id: 3, label: 'Address2', tag: '<?ADDRESS2?>', length: 30 },
    //   { id: 4, label: 'Address3', tag: '<?ADDRESS3?>', length: 30 },
    //   { id: 5, label: 'Address4', tag: '<?ADDRESS4?>', length: 30 },
    //   { id: 6, label: 'Subject', tag: '<?SUBJECT?>', length: 75 },
    //   { id: 7, label: 'Content1', tag: '<?CONTENT1?>', length: 500 },
    //   { id: 8, label: 'Content2', tag: '<?CONTENT2?>', length: 500 },
    //   { id: 9, label: 'Invoice', tag: '<?INVOICE?>', length: 10 },
    //   { id: 10, label: 'InvoiceDate', tag: '<?INVOICEDATE?>', length: 10 },
    //   { id: 11, label: 'Amount', tag: '<?AMOUNT?>', length: 20 },
    //   { id: 12, label: 'Content3', tag: '<?CONTENT3?>', length: 500 },
    //   { id: 13, label: 'Content4', tag: '<?CONTENT4?>', length: 500 }
    // ];
    this.fields = [
      { id: 1, label: 'Active Customer Report' },
      { id: 2, label: 'Operating Unit: ' },
      { id: 13, label: 'Operating Unit', tag: '<?NAME?>' },
      { id: 14, label: 'Date', tag: '<?SYSTEM_DATE?>' },
      { id: 3, label: 'Date: ' },
      { id: 4, label: 'Customer Name: ' },
      { id: 5, label: 'Total Records Included: ' },
      { id: 6, label: 'Primary Customer Number' , tag: '<?P_CUSTOMER_NUMBER?>'},
      { id: 7, label: 'Customer Name' , tag: '<?CUST_NAME?>'},
      { id: 8, label: 'Customer Number' , tag: '<?CUST_NUM?>'},
      { id: 9, label: 'Site Name' , tag: '<?SITE_NAME?>'},
      { id: 10, label: 'Site Number' , tag: '<?SITE_NUMBER?>'},
      { id: 11, label: 'Attribute1' , tag: '<?ATTRIBUTE1?>'},
      { id: 12, label: 'Attribute2' , tag: '<?ATTRIBUTE2?>'},
    ];
    this.rows = [{
      columnCount: 1, type: 0, columns: [{}]
    }];
  }
  selectField(rowIndex, columnIndex) {
    this.selectedRow = rowIndex;
    this.selectedColumn = columnIndex;
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

  addRow(index) {
    let tColumns = [];
    for (let i = 0; i < this.rows[index].columns.length; i++) {
      tColumns.push({});
    }
    if (index == this.rows.length - 1 || index == 0) {
      this.rows.push({ columnCount: 1, type: 0, columns: tColumns });
    } else {
      this.rows.splice(index, 0, { columnCount: 1, type: 0, columns: tColumns });
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
    if (this.rows[rowIndex].type == 0)
      this.rows[rowIndex].type = 1;
    else
      this.rows[rowIndex].type = 0;
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
 restItemsUrl = 'http://10.12.186.126:8082/RTF/rest/executertf';


 constructor(private http: HttpClient, private router: Router) {
 }
 
 // database Service

 GenerateRTF() {

   this.getRestItems();
  // this.postRquest(this.rows)

 }

 getRestItems(): void {
   this.restItemsServiceGetRestItems()
     .subscribe(
       restItems => {
         this.restItems = restItems;
         console.log(this.restItems);
       }
     )
 }

 restItemsServiceGetRestItems() {
   return this.http
     .get<any[]>(this.restItemsUrl)
     .pipe(map(data => data));
 }


 //Service to Write Data in a file
 response: any[];

 postRquest(body) {
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   if (body == null) {

     let urlSearchParams = new URLSearchParams();
     urlSearchParams.append('title', 'hi');
     let body = urlSearchParams.toString();
   }

   return this.http.post('http://127.0.0.1:800/data', body)
     .toPromise()
     .then(response => {
       return response
     })
     .catch(error => {
     });
 }

 Preview() {

  this.router.navigate(['preview']);
}


// Mayur's code Ends from here




}

interface Row {
  columnCount: number;
  type: number;
  columns: Array<Column>;
}
interface Column {
  field?: Field;
  alignment?: string;
  inDropZone?: boolean;
}
interface Field {
  id: number;
  label: string;
  tag?: string;
  length?: number;
}