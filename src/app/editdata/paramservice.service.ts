import { Injectable } from '@angular/core';


@Injectable()
export class ShareService {

  //   constructor(
  //     private router:Router,
  //     private companyServiceService:CompanyServiceService
  //   ) { }

  private data;

  setData(data) {
    this.data = data;
  }

  getData() {
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData() {
    this.data = undefined;
  }

}
