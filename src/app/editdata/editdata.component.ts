import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Pipe } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe {
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
  editFieldData: string = '-1';



  ngOnInit() {
    this.fields = [
      { id: 1, label: 'Operating Unit', tag: '<?OPERATING_UNIT?>', checked: false },
      { id: 2, label: 'Start Date', tag: '<?START_DATE?>', checked: false },
      { id: 3, label: 'End Date', tag: '<?END_DATE?>', checked: false },
      { id: 4, label: 'Invoice Number', tag: '<?INV_NUM?>', checked: false },
      { id: 5, label: 'Supplier Name', tag: '<?SUPPLIER_NAME?>', checked: false },
    ];

  }

  constructor(private router: Router) {

  }


  // Route to Create Page
  Create() {

    this.router.navigate(['create']);
  }

  // Handle buttons
  EditBtnClicked: boolean = false;
  SaveBtnClicked: boolean = false;
  DiscardBtnClicked: boolean = false;
  BackupTemplateData: Array<Field> = [];
  checkboxClicked: boolean = false;

  Edit(clicked: boolean) {
    this.EditBtnClicked = clicked;
   // this.BackupTemplateData = JSON.parse(JSON.stringify(this.fields));


  }

  Discard(clicked: boolean) {
    this.DiscardBtnClicked = clicked;
    this.SaveBtnClicked = false
    this.EditBtnClicked = false;
    this.checkboxClicked = false;

    this.ngOnInit()


  }

  Save(clicked: boolean) {
    this.SaveBtnClicked = clicked;
    this.EditBtnClicked = false;
    this.checkboxClicked = clicked;

    this.BackupTemplateData = JSON.parse(JSON.stringify(this.fields));
    Object.assign(this.fields, this.BackupTemplateData);

  //  console.log(JSON.stringify(this.fields))
   // console.log(JSON.stringify(this.BackupTemplateData))

  }


  onClicked(event) {
    for (var i = 0; i < this.fields.length; i++) {
      if (this.fields[i].label == event.target.value) {
        this.fields[i].checked = event.target.checked;
      }
      Object.assign(this.fields, this.fields);

    }
  }


}

interface Field {
  id: number;
  showBorder?: boolean;
  label: string;
  tag?: string;
  length?: number;
  checked?: boolean
}
