import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaCreateComponent } from './components/agenda-create/agenda-create.component';
import { AgendaDetailsComponent } from './components/agenda-details/agenda-details.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgendaCreateComponent,
    AgendaDetailsComponent,
    AgendaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
