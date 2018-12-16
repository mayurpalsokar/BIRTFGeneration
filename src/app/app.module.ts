import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { sharedService } from './home/shared.service';
import { EditdataComponent } from './editdata/editdata.component';
import { FilterPipe } from './editdata/filter.pipe';
import { FilterPipe1 } from './editdata/filter1.pipe';
import { FilterPipe2 } from './editdata/filter2.pipe';
import { FilterPipe3 } from './editdata/filter3.pipe';
import { DatePipe } from '@angular/common';
import { MyService } from './editdata/paramservice.service';
//import { MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateComponent,
    EditdataComponent,
    FilterPipe,
    FilterPipe1,
    FilterPipe2,
    FilterPipe3//,
    //MatCheckboxModule 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [sharedService, DatePipe,MyService]
})
export class AppModule { }
