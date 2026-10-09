import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TelephoneListComponent } from './telephone-list/telephone-list.component';
import { TelephoneEditComponent } from './telephone-edit/telephone-edit.component';

@NgModule({
  declarations: [AppComponent, TelephoneListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, TelephoneEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
