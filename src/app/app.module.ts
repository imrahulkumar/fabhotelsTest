import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { AppRoutingModule } from ".//app-routing.module";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgRedux,
  DevToolsExtension,
  NgReduxModule
} from "@angular-redux/store";

import { IAppState, rootReducer ,INITIAL_STATE} from "./store";
import { ContactComponent } from './home/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  counter = 0;
  constructor(private ngRedux: NgRedux<IAppState>) {
   ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

 
}
