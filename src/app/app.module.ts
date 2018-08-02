import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { PreviewComponent } from './preview/preview.component';
import { sharedService } from './home/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpClientModule,
	AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [sharedService]
})
export class AppModule { }
