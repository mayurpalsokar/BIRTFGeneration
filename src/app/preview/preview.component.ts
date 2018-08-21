import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private router: Router) { }
  public RTFDownloadUrl = window.sessionStorage.getItem('rtfdownloadurl')
  
  ngOnInit() {
  }

download() {

 // window.open("https://www.w3schools.com");
 //window.open(this.RTFDownloadUrl);
 //console.log(this.RTFDownloadUrl)
 window.open('./assets/AP Invoice Print Report.pdf');
}


back() {

  this.router.navigate(['create']);
}

//Image Upload
  // localUrl: any[];

  // showPreviewImage(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //       var reader = new FileReader();
  //       reader.onload = (event: any) => {
  //           this.localUrl = event.target.result;
  //       }
  //       reader.readAsDataURL(event.target.files[0]);
  //   }
  // }


}
