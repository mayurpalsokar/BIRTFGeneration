import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { sharedService } from './shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  restItems: any;
  restItemsUrl: any;
  selectedvalue: any;



  ngOnInit() {
  }

  constructor(private router: Router, private http: HttpClient, private service: sharedService) {

  }

 public Selected(value: any) {
    console.log(value);
    this.service.send(value);
   // return value;
       } 
      

  Create() {
    this.router.navigate(['create']);
   // this.Selected 
 
  }


  cloudbuttonWasClicked: boolean = false;
  premisebuttonWasClicked: boolean = false;
  environment: any ;

  ERPbuttonWasClicked: boolean = false;
  HCMbuttonWasClicked: boolean = false;
  SCMbuttonWasClicked: boolean = false;
  application: any;

  buttonDisabled: boolean
  payablesbuttonWasClicked: boolean = false;
  receivablesbuttonWasClicked: boolean = false;
  payrollbuttonWasClicked: boolean = false;
  inventorybuttonWasClicked: boolean = false;
  module: any;

  setCloudButtonClicked(clicked: boolean) {
    this.cloudbuttonWasClicked = clicked;
    this.environment = 'Cloud Environment';
  }

  setPremiseButtonClicked(clicked: boolean) {
    this.premisebuttonWasClicked = clicked;
    this.environment = 'On-Premise Environment';
  }

  //Application logic starts here

  setERPButtonClicked(clicked: boolean) {
    this.ERPbuttonWasClicked = clicked;
    this.HCMbuttonWasClicked = false;
    this.SCMbuttonWasClicked = false;
    this.application = 'ERP';
  }

  setHCMButtonClicked(clicked: boolean) {
    this.HCMbuttonWasClicked = clicked;
    this.ERPbuttonWasClicked = false;
    this.SCMbuttonWasClicked = false;
    this.application = 'HCM';
  }


  setSCMButtonClicked(clicked: boolean) {
    this.SCMbuttonWasClicked = clicked;
    this.ERPbuttonWasClicked = false;
    this.HCMbuttonWasClicked = false;
    this.application = 'SCM';

  }


  // Module logic starts here

  setPayablesButtonClicked(clicked: boolean) {
    this.payablesbuttonWasClicked = clicked;
    this.buttonDisabled = false;
    this.restItemsUrl = 'http://127.0.0.1:300/PAYABLES';
    this.GetReportNames();
    this.module = 'Payables';
  }


  setReceivablesButtonClicked(clicked: boolean) {
    this.receivablesbuttonWasClicked = clicked;
    this.buttonDisabled = false;
    this.restItemsUrl = 'http://127.0.0.1:300/RECEIVABLES';
    this.GetReportNames();
    this.module = 'Receivables';
  }


  setPayrollButtonClicked(clicked: boolean) {
    this.payrollbuttonWasClicked = clicked;
    this.buttonDisabled = false;
    this.restItemsUrl = 'http://127.0.0.1:300/PAYROLL';
    this.GetReportNames();
    this.module = 'Payroll';
  }


  setInventoryButtonClicked(clicked: boolean) {
    this.inventorybuttonWasClicked = clicked;
    this.buttonDisabled = false;
    this.restItemsUrl = 'http://127.0.0.1:300/INVENTORY';
    this.GetReportNames();
    this.module = 'Inventory';
  }


  // REST API logic to get report names

  GetReportNames() {

    this.getReportList();

  }

  // Read all REST Items
  getReportList(): void {
    this.restItemsServiceGetReportList()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetReportList() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }


}