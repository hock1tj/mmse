//Base Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Third Party Modules
import { FlexLayoutModule } from '@angular/flex-layout';

//Local Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './angular-material/material.module'

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlaylistComponent } from './components/playlist/playlist.component';


//Services
import { MediaMatcher } from '@angular/cdk/layout';

@NgModule(({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, FormsModule,
    FlexLayoutModule, MaterialModule
  ],
  providers: [
    MediaMatcher
  ],
  bootstrap: [AppComponent]
}) as any)
export class AppModule { }
