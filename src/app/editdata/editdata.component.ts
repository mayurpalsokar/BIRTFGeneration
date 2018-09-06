import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Pipe } from '@angular/core';
import { HttpModule, Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

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

  ngOnInit() {

    this.fields = [
      { id: 1, label: 'Operating Unit', tag: '<?OPERATING_UNIT?>', required: true },
      { id: 2, label: 'Start Date', tag: '<?START_DATE?>', required: true },
      { id: 3, label: 'End Date', tag: '<?END_DATE?>', required: true },
      { id: 4, label: 'Invoice Number', tag: '<?INV_NUM?>', required: false },
      { id: 5, label: 'Supplier Name', tag: '<?SUPPLIER_NAME?>', required: false },
    ];

    
  this.rows = [{
    columnCount: 1, type: 'prompt'
  }];
  }

  constructor(private router: Router,private http: HttpClient) {

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


  public Selected(event) {
    // console.log(event);

    console.log(event.target.value);
    // console.log(JSON.stringify(this.fields))

    for (var i = 0; i < this.fields.length; i++) {

      if (this.fields[i].label == event.target.value) {
        this.fields[i].required = true;
        }
      Object.assign(this.fields, this.fields);
    }
    // console.log(JSON.stringify(this.fields))

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
