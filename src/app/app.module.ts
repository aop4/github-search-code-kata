import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUserSearchComponent } from './components/github-user-search/github-user-search.component';
import { GithubSearchClient } from './services/github-search-client.service';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserSearchComponent,
    UserOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Title,
    HttpClient,
    GithubSearchClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
