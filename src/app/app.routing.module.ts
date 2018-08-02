import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CreateComponent} from './create/create.component';
import {PreviewComponent} from './preview/preview.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'create', component: CreateComponent },
{ path: 'preview', component: PreviewComponent },
{path : '', component : LoginComponent}
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }