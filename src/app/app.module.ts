import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdGridListModule, MdTabsModule, MdInputModule, MdToolbarModule, } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsfourComponent } from './news-four.component';
import { NewsComponent } from './news/news.component';
import { SourceComponent } from './sources/sources.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: NewsfourComponent },
  { path: 'detail/:id', component: NewsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsfourComponent,
    NewsComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,	
    HttpModule,
    FormsModule,
    MdButtonModule, 
    MdCardModule,
    MdGridListModule,
    MdTabsModule,
    MdInputModule,
    MdToolbarModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
