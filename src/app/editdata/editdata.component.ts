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

    var reportname = window.sessionStorage.getItem('reportname');

    console.log('reportname: ' + reportname)

    this.rows = [{
      columnCount: 1, type: 'prompt'
    }];

    if (reportname === 'AR Aging Report') {
      this.jsondata =
        [{
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
    else if (reportname === 'Customer Conversion Report') {
      this.jsondata =
        [{
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
                  "source": "Q1",
                  "element": [
                    {
                      "name": "PARTY_NUMBER",
                      "value": "PARTY_NUMBER",
                      "label": "PARTY_NUMBER",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "1"
                    },
                    {
                      "name": "SPONSOR_AWARD_NUMBER",
                      "value": "SPONSOR AWARD NUMBER",
                      "label": "SPONSOR_AWARD_NUMBER",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "2"
                    },
                    {
                      "name": "LETTER_OF_CREDIT",
                      "value": "LETTER OF CREDIT",
                      "label": "LETTER_OF_CREDIT",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "3"
                    },
                    {
                      "name": "FEDERAL",
                      "value": "FEDERAL",
                      "label": "FEDERAL",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "4"
                    },
                    {
                      "name": "LOC_NUMBER",
                      "value": "LOC_NUMBER",
                      "label": "LOC_NUMBER",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "5"
                    },
                    {
                      "name": "PARTY_NAME",
                      "value": "PARTY_NAME",
                      "label": "PARTY_NAME",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "6"
                    },
                    {
                      "name": "PARTY_TYPE",
                      "value": "PARTY_TYPE",
                      "label": "PARTY_TYPE",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "7"
                    },
                    {
                      "name": "PARTY_STATUS",
                      "value": "PARTY STATUS",
                      "label": "PARTY_STATUS",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "8"
                    },
                    {
                      "name": "CUSTOMER_ACCOUNT_NUMBER",
                      "value": "CUSTOMER ACCOUNT NUMBER",
                      "label": "CUSTOMER_ACCOUNT_NUMBER",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "9"
                    },
                    {
                      "name": "CUSTOMER_ACCOUNT_NAME",
                      "value": "CUSTOMER ACCOUNT NAME",
                      "label": "CUSTOMER_ACCOUNT_NAME",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "10"
                    },
                    {
                      "name": "CUSTOMER_TYPE",
                      "value": "CUSTOMER_TYPE",
                      "label": "CUSTOMER_TYPE",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "11"
                    },
                    {
                      "name": "PARTY_SITE_NUMBER",
                      "value": "PARTY_SITE_NUMBER",
                      "label": "PARTY_SITE_NUMBER",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "12"
                    },
                    {
                      "name": "PARTY_SITE_NAME",
                      "value": "PARTY_SITE_NAME",
                      "label": "PARTY_SITE_NAME",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "13"
                    },
                    {
                      "name": "BILL_TO_FLAG",
                      "value": "BILL_TO_FLAG",
                      "label": "BILL_TO_FLAG",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "14"
                    },
                    {
                      "name": "SHIP_TO_FLAG",
                      "value": "SHIP_TO_FLAG",
                      "label": "SHIP_TO_FLAG",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "15"
                    },
                    {
                      "name": "ADDRESS1",
                      "value": "ADDRESS1",
                      "label": "ADDRESS1",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "16"
                    },
                    {
                      "name": "ADDRESS2",
                      "value": "ADDRESS2",
                      "label": "ADDRESS2",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "17"
                    },
                    {
                      "name": "ADDRESS3",
                      "value": "ADDRESS3",
                      "label": "ADDRESS3",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "18"
                    },
                    {
                      "name": "CITY",
                      "value": "CITY",
                      "label": "CITY",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "19"
                    },
                    {
                      "name": "STATE",
                      "value": "STATE",
                      "label": "STATE",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "20"
                    },
                    {
                      "name": "POSTAL_CODE",
                      "value": "POSTAL_CODE",
                      "label": "POSTAL_CODE",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "21"
                    },
                    {
                      "name": "PROVINCE",
                      "value": "PROVINCE",
                      "label": "PROVINCE",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "22"
                    },
                    {
                      "name": "COUNTRY",
                      "value": "COUNTRY",
                      "label": "COUNTRY",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "23"
                    },
                    {
                      "name": "STATUS",
                      "value": "STATUS",
                      "label": "STATUS",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "24"
                    },
                    {
                      "name": "PRIMARY_CONTACT",
                      "value": "PRIMARY CONTACT",
                      "label": "PRIMARY_CONTACT",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "25"
                    },
                    {
                      "name": "PRIMARY_PHONE",
                      "value": "PRIMARY PHONE",
                      "label": "PRIMARY_PHONE",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "26"
                    },
                    {
                      "name": "PRIMARY_EMAIL",
                      "value": "PRIMARY EMAIL",
                      "label": "PRIMARY_EMAIL",
                      "dataType": "xsd:string",
                      "breakOrder": "",
                      "fieldOrder": "27"
                    }
                  ]
                }]
              }]
            }]
          }],
          "parameters": [{
            "parameter": [
              {
                "name": "p_creation_date",
                "dataType": "xsd:date",
                "type": "mandatory",
                "optionalparamtype": "",
                "rowPlacement": "1",
                "selected": true,
                "select": [{
                  "label": "Creation Date"
                }]
              },
              {
                "name": "p_source_system",
                "dataType": "xsd:string",
                "type": "recommended",
                "optionalparamtype": "",
                "selected": false,
                "rowPlacement": "1",
                "select": [{
                  "label": "Source System"
                }]
              }
            ],
            "optionalparam": [{
              "parameter": "",
              "operator": "",
              "hint": ""
            }]
          }]
        }
        ]
    }
    else if (reportname === 'PO Accrual Report') {
      this.jsondata =
        [{
          "output": [{
            "uniqueRowName": "false",
            "rootName": "DATA_DS",
            "nodeList": [{
              "name": "data-structure",
              "dataStructure": [{
                "tagName": "DATA_DS",
                "group": [{
                  "name": "G_1",
                  "label": "G_1",
                  "source": "GET_PO_ACCR_DTLS",
                  "element": [
                    {
                      "name": "BUSINESS_UNIT",
                      "value": "BUSINESS_UNIT",
                      "label": "BUSINESS_UNIT",
                      "fieldOrder": "1",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "PO_NUMBER",
                      "value": "PO_NUMBER",
                      "label": "PO_NUMBER",
                      "fieldOrder": "2",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "SUPPLIER_NAME",
                      "value": "SUPPLIER_NAME",
                      "label": "SUPPLIER_NAME",
                      "fieldOrder": "3",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "SUPPLIER_NUMBER",
                      "value": "SUPPLIER_NUMBER",
                      "label": "SUPPLIER_NUMBER",
                      "fieldOrder": "4",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "SUPPLIER_SITE_NAME",
                      "value": "SUPPLIER_SITE_NAME",
                      "label": "SUPPLIER_SITE_NAME",
                      "fieldOrder": "5",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "PO_CREATION_DATE",
                      "value": "PO_CREATION_DATE",
                      "label": "PO_CREATION_DATE",
                      "fieldOrder": "6",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "PO_LINE_NUMBER",
                      "value": "PO_LINE_NUMBER",
                      "label": "PO_LINE_NUMBER",
                      "fieldOrder": "7",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PO_LINE_STATUS",
                      "value": "PO_LINE_STATUS",
                      "label": "PO_LINE_STATUS",
                      "fieldOrder": "8",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "PO_LINE_DESCRIPTION",
                      "value": "PO_LINE_DESCRIPTION",
                      "label": "PO_LINE_DESCRIPTION",
                      "fieldOrder": "9",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "PO_LINE_UOM",
                      "value": "PO_LINE_UOM",
                      "label": "PO_LINE_UOM",
                      "fieldOrder": "10",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "PO_LINE_QTY",
                      "value": "PO_LINE_QTY",
                      "label": "PO_LINE_QTY",
                      "fieldOrder": "12",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PO_LINE_AMOUNT",
                      "value": "PO_LINE_AMOUNT",
                      "label": "PO_LINE_AMOUNT",
                      "fieldOrder": "13",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PO_CURRENCY",
                      "value": "PO_CURRENCY",
                      "label": "PO_CURRENCY",
                      "fieldOrder": "11",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "PO_LINE_AMT_IN_USD",
                      "value": "PO_LINE_AMT_IN_USD",
                      "label": "PO_LINE_AMT_IN_USD",
                      "fieldOrder": "14",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PO_CHARGE_ACCOUNT",
                      "value": "PO_CHARGE_ACCOUNT",
                      "label": "PO_CHARGE_ACCOUNT",
                      "fieldOrder": "15",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "COST_CENTRE",
                      "value": "COST_CENTRE",
                      "label": "COST_CENTRE",
                      "fieldOrder": "16",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "RECEIPT_AMOUNT",
                      "value": "RECEIPT_AMOUNT",
                      "label": "RECEIPT_AMOUNT",
                      "fieldOrder": "18",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "RECEIPT_CURRENCY",
                      "value": "RECEIPT_CURRENCY",
                      "label": "RECEIPT_CURRENCY",
                      "fieldOrder": "17",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "RECEIPT_AMT_IN_USD",
                      "value": "RECEIPT_AMT_IN_USD",
                      "label": "RECEIPT_AMT_IN_USD",
                      "fieldOrder": "19",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PENDING_RECEIPTS_QTY",
                      "value": "PENDING_RECEIPTS_QTY",
                      "label": "PENDING_RECEIPTS_QTY",
                      "fieldOrder": "23",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PENDING_BILLING_QTY",
                      "value": "PENDING_BILLING_QTY",
                      "label": "PENDING_BILLING_QTY",
                      "fieldOrder": "24",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PENDING_RECEIPTS_AMOUNT",
                      "value": "PENDING_RECEIPTS_AMOUNT",
                      "label": "PENDING_RECEIPTS_AMOUNT",
                      "fieldOrder": "25",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PENDING_BILLING_AMOUNT",
                      "value": "PENDING_BILLING_AMOUNT",
                      "label": "PENDING_BILLING_AMOUNT",
                      "fieldOrder": "26",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PENDING_RECEIPTS_AMT_USD",
                      "value": "PENDING_RECEIPTS_AMT_USD",
                      "label": "PENDING_RECEIPTS_AMT_USD",
                      "fieldOrder": "27",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "PENDING_BILLING_AMT_USD",
                      "value": "PENDING_BILLING_AMT_USD",
                      "label": "PENDING_BILLING_AMT_USD",
                      "fieldOrder": "28",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "INVOICE_CURRENCY_CODE",
                      "value": "INVOICE_CURRENCY_CODE",
                      "label": "INVOICE_CURRENCY_CODE",
                      "fieldOrder": "20",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "INV_LINE_AMT",
                      "value": "INV_LINE_AMT",
                      "label": "INV_LINE_AMT",
                      "fieldOrder": "21",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "INVOICE_LINE_AMT_IN_USD",
                      "value": "INVOICE_LINE_AMT_IN_USD",
                      "label": "INVOICE_LINE_AMT_IN_USD",
                      "fieldOrder": "22",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "AMT_LEFT_LOCAL",
                      "value": "AMT_LEFT_LOCAL",
                      "label": "AMT_LEFT_LOCAL",
                      "fieldOrder": "29",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "AMT_LEFT_USD",
                      "value": "AMT_LEFT_USD",
                      "label": "AMT_LEFT_USD",
                      "fieldOrder": "30",
                      "breakOrder": "",
                      "dataType": "xsd:double"
                    },
                    {
                      "name": "REQUESTOR",
                      "value": "REQUESTOR",
                      "label": "REQUESTOR",
                      "fieldOrder": "31",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "PO_DESC",
                      "value": "PO_DESC",
                      "label": "PO_DESC",
                      "fieldOrder": "32",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "ACCOUNT",
                      "value": "ACCOUNT",
                      "label": "ACCOUNT",
                      "fieldOrder": "33",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    },
                    {
                      "name": "DELIVERY_DATE",
                      "value": "DELIVERY_DATE",
                      "label": "DELIVERY_DATE",
                      "fieldOrder": "34",
                      "breakOrder": "",
                      "dataType": "xsd:string"
                    }
                  ]
                }]
              }]
            }]
          }],
          "parameters": [{
            "parameter": [
              {
                "name": "P_BU_NAME",
                "dataType": "xsd:string",
                "type": "mandatory",
                "optionalparamtype": "",
                "rowPlacement": "2",
                "selected": true,
                "select": [{
                  "label": "*Business Unit"
                }]
              },
              {
                "name": "P_PO_NUM",
                "dataType": "xsd:string",
                "type": "mandatory",
                "optionalparamtype": "",
                "rowPlacement": "4",
                "selected": true,
                "select": [{
                  "label": "Purchase Order Number"
                }]
              },
              {
                "name": "PO_STATUS",
                "dataType": "xsd:string",
                "type": "recommended",
                "optionalparamtype": "",
                "rowPlacement": "6",
                "selected": false,
                "select": [{
                  "label": "Purchase Order Status"
                }]
              },
              {
                "name": "P_SUPPLIER_NAME",
                "dataType": "xsd:string",
                "type": "recommended",
                "optionalparamtype": "",
                "rowPlacement": "5",
                "selected": false,
                "select": [{
                  "label": "Supplier Name"
                }]
              },
              {
                "name": "P_SUPLIER_SITE_NAME",
                "dataType": "xsd:string",
                "type": "recommended",
                "optionalparamtype": "",
                "selected": false,
                "rowPlacement": "9",
                "select": [{
                  "label": "Supplier Site Name"
                }]
              },
              {
                "name": "P_COST_CENTRE",
                "dataType": "xsd:string",
                "type": "recommended",
                "optionalparamtype": "",
                "selected": false,
                "rowPlacement": "3",
                "select": [{
                  "label": "Cost Centre"
                }]
              },
              {
                "name": "P_BUYER_ID",
                "dataType": "xsd:string",
                "type": "recommended",
                "optionalparamtype": "",
                "selected": false,
                "rowPlacement": "7",
                "select": [{
                  "label": "Buyer Name"
                }]
              },
              {
                "name": "P_PERIOD_NAME",
                "dataType": "xsd:string",
                "rowPlacement": "8",
                "type": "recommended",
                "optionalparamtype": "",
                "selected": false,
                "select": [{
                  "label": "Period Name"
                }]
              }
            ]
            ,
            "optionalparam": [{
              "parameter": "",
              "operator": "",
              "hint": ""
            }]
          }]
        }]
    }


  }

  constructor(private router: Router, private http: HttpClient,
    private shareService: ShareService) {

  }


  // Route to Create Page
  Create() {

    this.shareService.setData(this.jsondata[0].parameters);

    this.router.navigate(['create']);

    // to save json file
    let json = { document: this.jsondata[0].parameters }
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

  Save(clicked: boolean, event) {
    this.SaveBtnClicked = clicked;
    this.checkboxClicked = clicked;


    // Change selected checkbox for mandatory params as true
    for (var i = 0; i <= 20; i++) {

      // console.log('Type: '+this.jsondata[0].parameters[0].parameter[i].type+' Label: '+this.jsondata[0].parameters[0].parameter[i].select[0].label);

      //if (this.jsondata[0].parameters[0].parameter[i].select[0].label === event.target.value)
      if (this.jsondata[0].parameters[0].parameter[i].type === 'mandatory') {
        this.jsondata[0].parameters[0].parameter[i].selected = true;
        // break;
      }
    }
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

  values1 = []

  public SelectDropDown(event) {
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

        // Set selected attribute as true
        if (this.jsondata[0].parameters[0].parameter[i].select[0].label === event.target.value) {
          this.jsondata[0].parameters[0].parameter[i].selected = true;
          // break;
        }

        // Populate Operator
        if (this.jsondata[0].parameters[0].parameter[i].optionalparamtype == "Range") {
          this.values1 = ["Range"];
          console.log('1 values1 ' + this.values1)
          break;
        }
        else if (this.jsondata[0].parameters[0].parameter[i].optionalparamtype == "Date Range") {
          this.values1 = ["Range"];
          console.log('2 values1 ' + this.values1)
          break;
        }
        else {
          this.values1 = ["=", "!="];
          console.log('3 values1 ' + this.values1)
          break;
        }

        //break;
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