//Base Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

//Third Party Modules
import { FlexLayoutModule } from '@angular/flex-layout';

//Local Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './angular-material/material.module'
import { TestModule } from './test-components/test.module'

//Components
import { AppComponent } from './app.component';
import { SearchPersonComponent } from './components/search-person/search-person.component';


@NgModule(({
  declarations: [
    AppComponent,
    SearchPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, FormsModule,
    FlexLayoutModule, MaterialModule, TestModule   
  ],

  bootstrap: [AppComponent]
}) as any)
export class AppModule { }
