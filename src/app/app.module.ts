import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profiles/profile.component';
// import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ProfileComponent ],
  bootstrap:    [ ProfileComponent ]
})
export class AppModule { }
