import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpModule, Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from "@angular/router";
import { sharedService } from '../home/shared.service';
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
  editTagData: string = '-1';

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
              "label": "<?G_PERSON_DETAILS?>",
              "tag": "<?for-each:G_PERSON_DETAILS?>"
            },
            "alignment": "L"
          },
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
          },
          {
            "inDropZone": false,
            "field": {
              "id": 13,
              "label": "<?End?>",
              "tag": "<?end for-each?>"
            },
            "alignment": "L"
          }
        ]
      }
    ];


    // Start: Added by Mayur

    this.jsondata = [{
      "output": [{
        "rootName": "DATA_DS",
        "uniqueRowName": "false",
        "nodeList": [{
          "name": "data-structure",
          "dataStructure": [{
            "tagName": "DATA_DS",
            "group": [{
              "name": "G_1",
              "label": "G_1",
              "source": "AR_AGING_REPORT_DM",
              "element": [
                {
                  "name": "CUSTOMER_NAME",
                  "value": "CUSTOMER_NAME",
                  "label": "CUSTOMER_NAME",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "1"
                },
                {
                  "name": "CUSTOMER_ACCOUNT_NUMBER",
                  "value": "CUSTOMER_ACCOUNT_NUMBER",
                  "label": "CUSTOMER_ACCOUNT_NUMBER",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "2"
                },
                {
                  "name": "CUSTOMER_CITY",
                  "value": "CUSTOMER_CITY",
                  "label": "CUSTOMER_CITY",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "7"
                },
                {
                  "name": "CUSTOMER_POSTAL_CODE",
                  "value": "CUSTOMER_POSTAL_CODE",
                  "label": "CUSTOMER_POSTAL_CODE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "8"
                },
                {
                  "name": "CUSTOMER_STATE",
                  "value": "CUSTOMER_STATE",
                  "label": "CUSTOMER_STATE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "9"
                },
                {
                  "name": "CUSTOMER_COUNTRY",
                  "value": "CUSTOMER_COUNTRY",
                  "label": "CUSTOMER_COUNTRY",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "10"
                },
                {
                  "name": "PAYMENT_SCHEDULE_CLASS",
                  "value": "PAYMENT_SCHEDULE_CLASS",
                  "label": "PAYMENT_SCHEDULE_CLASS",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "11"
                },
                {
                  "name": "DUE_DATE",
                  "value": "DUE_DATE",
                  "label": "DUE_DATE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "12"
                },
                {
                  "name": "AMOUNT_DUE_REMAINING",
                  "value": "AMOUNT_DUE_REMAINING",
                  "label": "AMOUNT_DUE_REMAINING",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "13"
                },
                {
                  "name": "AMOUNT_DUE_ORIGINAL",
                  "value": "AMOUNT_DUE_ORIGINAL",
                  "label": "AMOUNT_DUE_ORIGINAL",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "14"
                },
                {
                  "name": "TRX_NUMBER",
                  "value": "TRX_NUMBER",
                  "label": "TRX_NUMBER",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "15"
                },
                {
                  "name": "TRX_TYPE",
                  "value": "TRX_TYPE",
                  "label": "TRX_TYPE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "16"
                },
                {
                  "name": "TRX_DATE",
                  "value": "TRX_DATE",
                  "label": "TRX_DATE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "17"
                },
                {
                  "name": "GL_DATE",
                  "value": "GL_DATE",
                  "label": "GL_DATE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "18"
                },
                {
                  "name": "EXCHANGE_RATE",
                  "value": "EXCHANGE_RATE",
                  "label": "EXCHANGE_RATE",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "19"
                },
                {
                  "name": "TRX_CURRENCY",
                  "value": "TRX_CURRENCY",
                  "label": "TRX_CURRENCY",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "20"
                },
                {
                  "name": "LEDGER_CURRENCY",
                  "value": "LEDGER_CURRENCY",
                  "label": "LEDGER_CURRENCY",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "21"
                },
                {
                  "name": "DAYS_PAST_DUE",
                  "value": "DAYS_PAST_DUE",
                  "label": "DAYS_PAST_DUE",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "22"
                },
                {
                  "name": "OUT_AMT_INV_CUR",
                  "value": "OUT_AMT_INV_CUR",
                  "label": "OUT_AMT_INV_CUR",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "23"
                },
                {
                  "name": "OUT_AMT_USD",
                  "value": "OUT_AMT_USD",
                  "label": "OUT_AMT_USD",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "24"
                },
                {
                  "name": "CURR_VAL",
                  "value": "CURR_VAL",
                  "label": "CURR_VAL",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "25"
                },
                {
                  "name": "ONE_TO_THIRTY",
                  "value": "ONE_TO_THIRTY",
                  "label": "ONE_TO_THIRTY",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "26"
                },
                {
                  "name": "THIRTY_TO_SIXTY",
                  "value": "THIRTY_TO_SIXTY",
                  "label": "THIRTY_TO_SIXTY",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "27"
                },
                {
                  "name": "SIXTY_AND_ABOVE",
                  "value": "SIXTY_AND_ABOVE",
                  "label": "SIXTY_AND_ABOVE",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "28"
                },
                {
                  "name": "CUSTOMER_ADDRESS1",
                  "value": "CUSTOMER_ADDRESS1",
                  "label": "CUSTOMER_ADDRESS1",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "3"
                },
                {
                  "name": "CUSTOMER_ADDRESS2",
                  "value": "CUSTOMER_ADDRESS2",
                  "label": "CUSTOMER_ADDRESS2",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "4"
                },
                {
                  "name": "CUSTOMER_ADDRESS3",
                  "value": "CUSTOMER_ADDRESS3",
                  "label": "CUSTOMER_ADDRESS3",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "5"
                },
                {
                  "name": "CUSTOMER_ADDRESS4",
                  "value": "CUSTOMER_ADDRESS4",
                  "label": "CUSTOMER_ADDRESS4",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "6"
                },
                {
                  "name": "PARTY_NUMBER",
                  "value": "PARTY_NUMBER",
                  "label": "PARTY_NUMBER",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "29"
                },
                {
                  "name": "PARTY_TYPE",
                  "value": "PARTY_TYPE",
                  "label": "PARTY_TYPE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "30"
                },
                {
                  "name": "PARTY_ATTRIBUTE1",
                  "value": "PARTY_ATTRIBUTE1",
                  "label": "PARTY_ATTRIBUTE1",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "31"
                },
                {
                  "name": "PARTY_ATTRIBUTE2",
                  "value": "PARTY_ATTRIBUTE2",
                  "label": "PARTY_ATTRIBUTE2",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "32"
                },
                {
                  "name": "PARTY_ATTRIBUTE3",
                  "value": "PARTY_ATTRIBUTE3",
                  "label": "PARTY_ATTRIBUTE3",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "33"
                },
                {
                  "name": "PARTY_ATTRIBUTE4",
                  "value": "PARTY_ATTRIBUTE4",
                  "label": "PARTY_ATTRIBUTE4",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "34"
                },
                {
                  "name": "PARTY_ATTRIBUTE5",
                  "value": "PARTY_ATTRIBUTE5",
                  "label": "PARTY_ATTRIBUTE5",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "35"
                },
                {
                  "name": "PARTY_ATTRIBUTE6",
                  "value": "PARTY_ATTRIBUTE6",
                  "label": "PARTY_ATTRIBUTE6",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "36"
                },
                {
                  "name": "PARTY_ATTRIBUTE7",
                  "value": "PARTY_ATTRIBUTE7",
                  "label": "PARTY_ATTRIBUTE7",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "37"
                },
                {
                  "name": "PARTY_ATTRIBUTE8",
                  "value": "PARTY_ATTRIBUTE8",
                  "label": "PARTY_ATTRIBUTE8",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "38"
                },
                {
                  "name": "PARTY_ATTRIBUTE9",
                  "value": "PARTY_ATTRIBUTE9",
                  "label": "PARTY_ATTRIBUTE9",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "39"
                },
                {
                  "name": "PARTY_ATTRIBUTE10",
                  "value": "PARTY_ATTRIBUTE10",
                  "label": "PARTY_ATTRIBUTE10",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "40"
                },
                {
                  "name": "PARTY_ATTRIBUTE11",
                  "value": "PARTY_ATTRIBUTE11",
                  "label": "PARTY_ATTRIBUTE11",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "41"
                },
                {
                  "name": "PARTY_ATTRIBUTE12",
                  "value": "PARTY_ATTRIBUTE12",
                  "label": "PARTY_ATTRIBUTE12",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "42"
                },
                {
                  "name": "PARTY_ATTRIBUTE13",
                  "value": "PARTY_ATTRIBUTE13",
                  "label": "PARTY_ATTRIBUTE13",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "43"
                },
                {
                  "name": "PARTY_ATTRIBUTE14",
                  "value": "PARTY_ATTRIBUTE14",
                  "label": "PARTY_ATTRIBUTE14",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "44"
                },
                {
                  "name": "PARTY_ATTRIBUTE15",
                  "value": "PARTY_ATTRIBUTE15",
                  "label": "PARTY_ATTRIBUTE15",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "45"
                },
                {
                  "name": "PARTY_ATTRIBUTE16",
                  "value": "PARTY_ATTRIBUTE16",
                  "label": "PARTY_ATTRIBUTE16",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "46"
                },
                {
                  "name": "PARTY_ATTRIBUTE17",
                  "value": "PARTY_ATTRIBUTE17",
                  "label": "PARTY_ATTRIBUTE17",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "47"
                },
                {
                  "name": "PARTY_ATTRIBUTE18",
                  "value": "PARTY_ATTRIBUTE18",
                  "label": "PARTY_ATTRIBUTE18",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "48"
                },
                {
                  "name": "PARTY_ATTRIBUTE19",
                  "value": "PARTY_ATTRIBUTE19",
                  "label": "PARTY_ATTRIBUTE19",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "49"
                },
                {
                  "name": "PARTY_ATTRIBUTE20",
                  "value": "PARTY_ATTRIBUTE20",
                  "label": "PARTY_ATTRIBUTE20",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "50"
                },
                {
                  "name": "PARTY_ATTRIBUTE21",
                  "value": "PARTY_ATTRIBUTE21",
                  "label": "PARTY_ATTRIBUTE21",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "51"
                },
                {
                  "name": "PARTY_ATTRIBUTE22",
                  "value": "PARTY_ATTRIBUTE22",
                  "label": "PARTY_ATTRIBUTE22",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "52"
                },
                {
                  "name": "PARTY_ATTRIBUTE23",
                  "value": "PARTY_ATTRIBUTE23",
                  "label": "PARTY_ATTRIBUTE23",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "53"
                },
                {
                  "name": "PARTY_ATTRIBUTE24",
                  "value": "PARTY_ATTRIBUTE24",
                  "label": "PARTY_ATTRIBUTE24",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "54"
                },
                {
                  "name": "PARTY_PERSON_PRE_NAME_ADJUNCT",
                  "value": "PARTY_PERSON_PRE_NAME_ADJUNCT",
                  "label": "PARTY_PERSON_PRE_NAME_ADJUNCT",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "55"
                },
                {
                  "name": "PARTY_PERSON_FIRST_NAME",
                  "value": "PARTY_PERSON_FIRST_NAME",
                  "label": "PARTY_PERSON_FIRST_NAME",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "56"
                },
                {
                  "name": "PARTY_PERSON_MIDDLE_NAME",
                  "value": "PARTY_PERSON_MIDDLE_NAME",
                  "label": "PARTY_PERSON_MIDDLE_NAME",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "57"
                },
                {
                  "name": "PARTY_PERSON_LAST_NAME",
                  "value": "PARTY_PERSON_LAST_NAME",
                  "label": "PARTY_PERSON_LAST_NAME",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "58"
                },
                {
                  "name": "PARTY_PERSON_NAME_SUFFIX",
                  "value": "PARTY_PERSON_NAME_SUFFIX",
                  "label": "PARTY_PERSON_NAME_SUFFIX",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "59"
                },
                {
                  "name": "PARTY_PERSON_TITLE",
                  "value": "PARTY_PERSON_TITLE",
                  "label": "PARTY_PERSON_TITLE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "60"
                },
                {
                  "name": "PARTY_PERSON_PREV_LAST_NAME",
                  "value": "PARTY_PERSON_PREV_LAST_NAME",
                  "label": "PARTY_PERSON_PREV_LAST_NAME",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "61"
                },
                {
                  "name": "PARTY_MARITAL_STATUS",
                  "value": "PARTY_MARITAL_STATUS",
                  "label": "PARTY_MARITAL_STATUS",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "62"
                },
                {
                  "name": "PARTY_PERSON_ACADEMIC_TITLE",
                  "value": "PARTY_PERSON_ACADEMIC_TITLE",
                  "label": "PARTY_PERSON_ACADEMIC_TITLE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "63"
                },
                {
                  "name": "PARTY_PROVINCE",
                  "value": "PARTY_PROVINCE",
                  "label": "PARTY_PROVINCE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "64"
                },
                {
                  "name": "PARTY_COUNTY",
                  "value": "PARTY_COUNTY",
                  "label": "PARTY_COUNTY",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "65"
                },
                {
                  "name": "PARTY_EMAIL_ADDRESS",
                  "value": "PARTY_EMAIL_ADDRESS",
                  "label": "PARTY_EMAIL_ADDRESS",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "66"
                },
                {
                  "name": "PARTY_LANGUAGE_NAME",
                  "value": "PARTY_LANGUAGE_NAME",
                  "label": "PARTY_LANGUAGE_NAME",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "67"
                },
                {
                  "name": "PARTY_CATEGORY_CODE",
                  "value": "PARTY_CATEGORY_CODE",
                  "label": "PARTY_CATEGORY_CODE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "68"
                },
                {
                  "name": "PARTY_DUNS_NUMBER_C",
                  "value": "PARTY_DUNS_NUMBER_C",
                  "label": "PARTY_DUNS_NUMBER_C",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "69"
                },
                {
                  "name": "PARTY_PRIMARY_PHONE_PURPOSE",
                  "value": "PARTY_PRIMARY_PHONE_PURPOSE",
                  "label": "PARTY_PRIMARY_PHONE_PURPOSE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "70"
                },
                {
                  "name": "PARTY_PRIMARY_PHONE_LINE_TYPE",
                  "value": "PARTY_PRIMARY_PHONE_LINE_TYPE",
                  "label": "PARTY_PRIMARY_PHONE_LINE_TYPE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "71"
                },
                {
                  "name": "PARTY_PRIM_PHONE_COUNTRY_CODE",
                  "value": "PARTY_PRIM_PHONE_COUNTRY_CODE",
                  "label": "PARTY_PRIM_PHONE_COUNTRY_CODE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "72"
                },
                {
                  "name": "PARTY_PRIMARY_PHONE_AREA_CODE",
                  "value": "PARTY_PRIMARY_PHONE_AREA_CODE",
                  "label": "PARTY_PRIMARY_PHONE_AREA_CODE",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "73"
                },
                {
                  "name": "PARTY_PRIMARY_PHONE_NUMBER",
                  "value": "PARTY_PRIMARY_PHONE_NUMBER",
                  "label": "PARTY_PRIMARY_PHONE_NUMBER",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "74"
                },
                {
                  "name": "PARTY_PRIMARY_PHONE_EXTENSION",
                  "value": "PARTY_PRIMARY_PHONE_EXTENSION",
                  "label": "PARTY_PRIMARY_PHONE_EXTENSION",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "75"
                },
                {
                  "name": "PARTY_PREFERRED_CONTACT_METHOD",
                  "value": "PARTY_PREFERRED_CONTACT_METHOD",
                  "label": "PARTY_PREFERRED_CONTACT_METHOD",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "76"
                },
                {
                  "name": "PARTY_HOME_COUNTRY",
                  "value": "PARTY_HOME_COUNTRY",
                  "label": "PARTY_HOME_COUNTRY",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "77"
                },
                {
                  "name": "PARTY_ATTRIBUTE25",
                  "value": "PARTY_ATTRIBUTE25",
                  "label": "PARTY_ATTRIBUTE25",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "78"
                },
                {
                  "name": "PARTY_ATTRIBUTE26",
                  "value": "PARTY_ATTRIBUTE26",
                  "label": "PARTY_ATTRIBUTE26",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "79"
                },
                {
                  "name": "PARTY_ATTRIBUTE27",
                  "value": "PARTY_ATTRIBUTE27",
                  "label": "PARTY_ATTRIBUTE27",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "80"
                },
                {
                  "name": "PARTY_ATTRIBUTE28",
                  "value": "PARTY_ATTRIBUTE28",
                  "label": "PARTY_ATTRIBUTE28",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "81"
                },
                {
                  "name": "PARTY_ATTRIBUTE29",
                  "value": "PARTY_ATTRIBUTE29",
                  "label": "PARTY_ATTRIBUTE29",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "82"
                },
                {
                  "name": "PARTY_ATTRIBUTE30",
                  "value": "PARTY_ATTRIBUTE30",
                  "label": "PARTY_ATTRIBUTE30",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "83"
                },
                {
                  "name": "PARTY_DATE_OF_BIRTH",
                  "value": "PARTY_DATE_OF_BIRTH",
                  "label": "PARTY_DATE_OF_BIRTH",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "84"
                },
                {
                  "name": "PARTY_GENDER",
                  "value": "PARTY_GENDER",
                  "label": "PARTY_GENDER",
                  "dataType": "xsd:string",
                  "breakOrder": "",
                  "fieldOrder": "85"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER1",
                  "value": "PARTY_ATTRIBUTE_NUMBER1",
                  "label": "PARTY_ATTRIBUTE_NUMBER1",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "86"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER2",
                  "value": "PARTY_ATTRIBUTE_NUMBER2",
                  "label": "PARTY_ATTRIBUTE_NUMBER2",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "87"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER3",
                  "value": "PARTY_ATTRIBUTE_NUMBER3",
                  "label": "PARTY_ATTRIBUTE_NUMBER3",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "88"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER4",
                  "value": "PARTY_ATTRIBUTE_NUMBER4",
                  "label": "PARTY_ATTRIBUTE_NUMBER4",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "89"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER5",
                  "value": "PARTY_ATTRIBUTE_NUMBER5",
                  "label": "PARTY_ATTRIBUTE_NUMBER5",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "90"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER6",
                  "value": "PARTY_ATTRIBUTE_NUMBER6",
                  "label": "PARTY_ATTRIBUTE_NUMBER6",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "91"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER7",
                  "value": "PARTY_ATTRIBUTE_NUMBER7",
                  "label": "PARTY_ATTRIBUTE_NUMBER7",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "92"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER8",
                  "value": "PARTY_ATTRIBUTE_NUMBER8",
                  "label": "PARTY_ATTRIBUTE_NUMBER8",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "93"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER9",
                  "value": "PARTY_ATTRIBUTE_NUMBER9",
                  "label": "PARTY_ATTRIBUTE_NUMBER9",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "94"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER10",
                  "value": "PARTY_ATTRIBUTE_NUMBER10",
                  "label": "PARTY_ATTRIBUTE_NUMBER10",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "95"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER11",
                  "value": "PARTY_ATTRIBUTE_NUMBER11",
                  "label": "PARTY_ATTRIBUTE_NUMBER11",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "96"
                },
                {
                  "name": "PARTY_ATTRIBUTE_NUMBER12",
                  "value": "PARTY_ATTRIBUTE_NUMBER12",
                  "label": "PARTY_ATTRIBUTE_NUMBER12",
                  "dataType": "xsd:double",
                  "breakOrder": "",
                  "fieldOrder": "97"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE1",
                  "value": "PARTY_ATTRIBUTE_DATE1",
                  "label": "PARTY_ATTRIBUTE_DATE1",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "98"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE2",
                  "value": "PARTY_ATTRIBUTE_DATE2",
                  "label": "PARTY_ATTRIBUTE_DATE2",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "99"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE3",
                  "value": "PARTY_ATTRIBUTE_DATE3",
                  "label": "PARTY_ATTRIBUTE_DATE3",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "100"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE4",
                  "value": "PARTY_ATTRIBUTE_DATE4",
                  "label": "PARTY_ATTRIBUTE_DATE4",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "101"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE5",
                  "value": "PARTY_ATTRIBUTE_DATE5",
                  "label": "PARTY_ATTRIBUTE_DATE5",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "102"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE6",
                  "value": "PARTY_ATTRIBUTE_DATE6",
                  "label": "PARTY_ATTRIBUTE_DATE6",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "103"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE7",
                  "value": "PARTY_ATTRIBUTE_DATE7",
                  "label": "PARTY_ATTRIBUTE_DATE7",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "104"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE8",
                  "value": "PARTY_ATTRIBUTE_DATE8",
                  "label": "PARTY_ATTRIBUTE_DATE8",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "105"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE9",
                  "value": "PARTY_ATTRIBUTE_DATE9",
                  "label": "PARTY_ATTRIBUTE_DATE9",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "106"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE10",
                  "value": "PARTY_ATTRIBUTE_DATE10",
                  "label": "PARTY_ATTRIBUTE_DATE10",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "107"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE11",
                  "value": "PARTY_ATTRIBUTE_DATE11",
                  "label": "PARTY_ATTRIBUTE_DATE11",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "108"
                },
                {
                  "name": "PARTY_ATTRIBUTE_DATE12",
                  "value": "PARTY_ATTRIBUTE_DATE12",
                  "label": "PARTY_ATTRIBUTE_DATE12",
                  "dataType": "xsd:date",
                  "breakOrder": "",
                  "fieldOrder": "109"
                }
              ]
            }]
          }]
        }]
      }],
      "parameters": [{
        "parameter": [
          {
            "name": "P_AS_OF_DATE",
            // "defaultValue": "{$SYSDATE()$}",
            "dataType": "xsd:date",
            "type": "mandatory",
            "optionalparamtype": "",
            "rowPlacement": "2",
            "selected": false,
            "select": [{
              "label": "As of Date"
            }]
          },
          {
            "name": "P_REPORTING_CONTEXT",
            "dataType": "xsd:string",
            "type": "mandatory",
            "optionalparamtype": "",
            "selected": false,
            "rowPlacement": "2",
            "select": [{
              "label": "Reporting Context"
            }]
          },
          {
            "name": "P_LEDGER_CURRENCY",
            "dataType": "xsd:string",
            "type": "mandatory",
            "optionalparamtype": "",
            "selected": false,
            "rowPlacement": "2",
            "select": [{
              "label": "Ledger Currency"
            }]
          },
          {
            "name": "P_TRX_CURRENCY",
            "dataType": "xsd:string",
            "type": "recommended",
            "optionalparamtype": "",
            "rowPlacement": "3",
            "selected": false,
            "select": [{
              "label": "Invoice Currency"
            }]
          },
          {
            "name": "P_PAYMENT_SCHEDULE_CLASS",
            "dataType": "xsd:string",
            "type": "recommended",
            "optionalparamtype": "",
            "rowPlacement": "3",
            "selected": false,
            "select": [{
              "label": "Payment Schedule Class"
            }]
          },
          {
            "name": "P_TRX_TYPE",
            "dataType": "xsd:string",
            "type": "recommended",
            "optionalparamtype": "",
            "rowPlacement": "3",
            "selected": false,
            "select": [{
              "label": "Transaction Type"
            }]
          },
          {
            "name": "P_FROM_TRX_NUMBER",
            "dataType": "xsd:string",
            "type": "optional",
            "optionalparamtype": "Range",
            "rowPlacement": "4",
            "selected": false,
            "select": [{
              "label": "From Invoice Number"
            }]
          },
          {
            "name": "P_TO_TRX_NUMBER",
            "dataType": "xsd:string",
            "type": "optional",
            "selected": false,
            "optionalparamtype": "Range",
            "rowPlacement": "4",
            "select": [{
              "label": "To Invoice Number"
            }]
          },
          {
            "name": "P_FROM_GL_DATE",
            "dataType": "xsd:date",
            "type": "optional",
            "selected": false,
            "optionalparamtype": "Date Range",
            "rowPlacement": "4",
            "select": [{
              "label": "From GL Date"
            }]
          },
          {
            "name": "P_TO_GL_DATE",
            "dataType": "xsd:date",
            "type": "optional",
            "selected": false,
            "optionalparamtype": "Date Range",
            "rowPlacement": "4",
            "select": [{
              "label": "To GL Date"
            }]
          },
          {
            "name": "P_FROM_TRX_DATE",
            "dataType": "xsd:date",
            "selected": false,
            "type": "optional",
            "optionalparamtype": "Date Range",
            "rowPlacement": "5",
            "select": [{
              "label": "From Invoice Date"
            }]
          },
          {
            "name": "P_TO_TRX_DATE",
            "dataType": "xsd:date",
            "type": "optional",
            "selected": false,
            "optionalparamtype": "Date Range",
            "rowPlacement": "5",
            "select": [{
              "label": "To Invoice Date"
            }]
          },
          {
            "name": "P_FROM_DUE_DATE",
            "dataType": "xsd:date",
            "type": "optional",
            "selected": false,
            "optionalparamtype": "Date Range",
            "rowPlacement": "5",
            "select": [{
              "label": "From Due Date"
            }]
          },
          {
            "name": "P_TO_DUE_DATE",
            "dataType": "xsd:date",
            "type": "optional",
            "optionalparamtype": "Date Range",
            "selected": false,
            "rowPlacement": "5",
            "select": [{
              "label": "To Due Date"
            }]
          },
          {
            "name": "P_CUSTOMER_NAME",
            "dataType": "xsd:string",
            "type": "optional",
            "selected": false,
            "optionalparamtype": "Direct Match",
            "rowPlacement": "6",
            "select": [{
              "label": "Customer Name"
            }]
          },
          {
            "name": "P_FROM_CUST_ACCOUNT_NUMBER",
            "dataType": "xsd:string",
            "type": "optional",
            "optionalparamtype": "Range",
            "selected": false,
            "rowPlacement": "6",
            "select": [{
              "label": "From Account Number"
            }]
          },
          {
            "name": "P_TO_CUST_ACCOUNT_NUMBER",
            "dataType": "xsd:string",
            "type": "optional",
            "optionalparamtype": "Range",
            "selected": false,
            "rowPlacement": "6",
            "select": [{
              "label": "To Account Number"
            }]
          }
        ],
        "optionalparam": [{
          "Parameter": "",
          "Operator": "",
          "Hint": ""
        }]
      }
      ]
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


  // Start: Added by Mayur
  editTag() {

    this.editTagData = this.rows[this.selectedRow].columns[this.selectedColumn].field.tag;
  }

  updateEditTag() {
    this.rows[this.selectedRow].columns[this.selectedColumn].field.tag = this.editTagData;
    this.editTagData = "-1";
  }
  // End: Added by Mayur

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

    // to save json file

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
        }
      )
  }

  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }


  //Service to Write RTF JSonData in a file

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
    this.PreviewBtnClicked = false;
  }

  Discard(clicked: boolean) {
    this.DiscardBtnClicked = clicked;
    this.rows = JSON.parse(JSON.stringify(this.BackupTemplateData));
    Object.assign(this.rows, this.BackupTemplateData);
    this.EditBtnClicked = false;
    this.showDate = false;
    this.showPage = false;

    this.isHeader = !this.isHeader
    this.isFooter = !this.isFooter

    this.editFieldData = "-1";
    this.editTagData = "-1";
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
  optionalparam: Array<OptionalParam>;
}

interface OptionalParam {
  Parameter: string,
  Operator: string,
  Hint: string
}

interface ParameterList {
  name: string,
  dataType: string,
  type: string,
  selected: boolean,
  rowPlacement: string,
  select: Array<InputList>;
  optionalparamtype: string;
}

interface InputList {
  label: string
}

