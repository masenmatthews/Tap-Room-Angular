import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { ViewKegComponent } from './view-keg/view-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { DetailKegComponent } from './detail-keg/detail-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    ViewKegComponent,
    EditKegComponent,
    DetailKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
