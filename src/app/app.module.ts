import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUserSearchComponent } from './components/github-user-search/github-user-search.component';
import { GithubApiClient } from './services/github-api-client.service';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserSearchComponent,
    UserOverviewComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    Title,
    HttpClient,
    GithubApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
