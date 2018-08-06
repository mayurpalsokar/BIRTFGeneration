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
 window.open(this.RTFDownloadUrl);
 console.log(this.RTFDownloadUrl)
}


back() {

  this.router.navigate(['create']);
}
}
