import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Pipe } from '@angular/core';
import { HttpModule, Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ShareService } from './paramservice.service'


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


@Pipe({ name: 'filter3' })
export class FilterPipe3 {
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

  //fields: Array<Field>;
  //savedfields: Array<Field>;

  editFieldData: string = '-1';

  rows: Array<Row>;
  jsondata: Array<Data>;

  ngOnInit() {

    // this.fields = [
    //   { id: 1, label: 'Operating Unit', tag: '<?OPERATING_UNIT?>', required: true },
    //   { id: 2, label: 'Start Date', tag: '<?START_DATE?>', required: true },
    //   { id: 3, label: 'End Date', tag: '<?END_DATE?>', required: true },
    //   { id: 4, label: 'Invoice Number', tag: '<?INV_NUM?>', required: false },
    //   { id: 5, label: 'Supplier Number', tag: '<?SUPPLIER_NUMBER?>', required: false },
    //   { id: 5, label: 'Site Number', tag: '<?SITE_NUMBER?>', required: false },
    // ];


    this.rows = [{
      columnCount: 1, type: 'prompt'
    }];

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
          "parameter": "",
          "operator": "",
          "hint": ""
        }]
      }
      ]
    }
    ]

  }

  constructor(private router: Router, private http: HttpClient,
    private shareService: ShareService) {

  }


  // Route to Create Page
  Create() {

    this.shareService.setData(this.jsondata[0].parameters);

    this.router.navigate(['create']);

    // to save json file
    // let json = { document: this.fields }
    //this.postRquest(json)

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
  SaveBtnClicked: boolean = false;
  DiscardBtnClicked: boolean = false;
  //BackupTemplateData: Array<Field> = [];
  checkboxClicked: boolean = false;
  AddParambtnClicked: boolean = false;

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
    this.checkboxClicked = clicked;

  }



  // json update for recommended parameters checkbox
  public SelectCheckBox(event) {
    console.log(event.target.value);

    for (var i = 0; i <= 20; i++) {

      //  console.log(this.jsondata[0].parameters[0].parameter[i].select[0].label);

      if (this.jsondata[0].parameters[0].parameter[i].select[0].label === event.target.value) {
        this.jsondata[0].parameters[0].parameter[i].selected = true;
        break;
      }
    }
  }


  // add expression to json for optional parameters

  private values1 = ["1", "2", "3"];

  public AddExpressoion(event) {
    console.log(event.target.value);

    for (var i = 0; i <= 20; i++) {


        if (this.jsondata[0].parameters[0].parameter[i].optionalparamtype === 'Range')
       //   (this.jsondata[0].parameters[0].parameter[i].optionalparamtype === 'Date Range')
        {

          this.jsondata[0].parameters[0].optionalparam[0].parameter = event.target.value;
         // break;
        }

      if (this.jsondata[0].parameters[0].parameter[i].select[0].label === event.target.value) {

        console.log(this.jsondata[0].parameters[0].parameter[i].select[0].label);
        console.log("optionalparamtype: " + this.jsondata[0].parameters[0].parameter[i].optionalparamtype)

        if (this.jsondata[0].parameters[0].parameter[i].optionalparamtype == "Range") {
          this.values1 = ["Range"];
        }
        else if (this.jsondata[0].parameters[0].parameter[i].optionalparamtype == "Date Range") {
          this.values1 = ["Range"];
        }
        else {
          this.values1 = ["=", "!="];
        }

        break;
      }


    }

  }


  public populateoperator(event, value) {
    console.log(value)
    this.jsondata[0].parameters[0].optionalparam[0].operator = event.target.value;
  }


  public populateHint(event, value) {
    console.log(value)
    this.jsondata[0].parameters[0].optionalparam[0].hint = event.target.value;
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
  // getRowValue() {
  //   console.log(this.row);
  // }




}

// interface Field {
//   id: number;
//   showBorder?: boolean;
//   label: string;
//   tag?: string;
//   length?: number;
//   required: boolean
// }

interface Row {
  columnCount: number;
  type: string;
  showBorder?: boolean;
}


interface Data {
  output: Array<OutputList>;
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
  // group: Array<GroupList>;
}

interface ElementList {
  value: string;
  name: string;
  label: string;
  breakOrder: string;
  dataType: string;
  fieldOrder: string;
  //formatMask: string;
}

interface ParametersList {
  parameter: Array<ParameterList>;
  optionalparam: Array<OptionalParam>;
  length?: number;
}

interface OptionalParam {
  parameter: string,
  operator: string,
  hint: string
}

interface ParameterList {
  name: string,
  dataType: string,
  rowPlacement: string,
  type: string,
  selected: boolean,
  select: Array<InputList>;
  optionalparamtype: string;
}

interface InputList {
  label: string
  // valueSet: string,
  // multiple: string,
  // all: string,
  // allValue: null,
  // refreshParameters: string
  // size: string,
  // format: string

}