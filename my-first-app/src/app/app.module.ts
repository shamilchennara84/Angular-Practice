import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';




// Components, directives, and pipes used within this module
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,

  ],
  imports: [BrowserModule,FormsModule],
  
  // Modules from Angular or third-party libraries
  providers: [], // Services (providers) used within this module
  bootstrap: [AppComponent], // The root component to be bootstrapped
})
export class AppModule {}
