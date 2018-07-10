import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WriterComponent } from './writer.component';
import { WriterService } from './writer.service';

//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';
// import { HttpclntComponent } from './httpclnt/httpclnt.component';


@NgModule({
  declarations: [
    AppComponent,
	  WriterComponent
	  // HttpclntComponent
  ],
  imports: [
    BrowserModule,
	  HttpClientModule,
	  ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [WriterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
