import { Component, OnInit } from '@angular/core';
import { GithubApiClient } from '../../services/github-api-client.service';
import { User } from '../../models/user';

@Component({
  selector: 'github-user-search',
  templateUrl: './github-user-search.component.html',
  styleUrls: ['./github-user-search.component.scss']
})
export class GithubUserSearchComponent implements OnInit {

  queryString: string = '';
  statusText: string = '';
  searchResults: any[] = [];

  constructor(private githubApiClient: GithubApiClient) {
  }

  ngOnInit(): void {
  }

  performSearch(): void {
    this.githubApiClient.searchForUser(this.queryString)
                            .then((users) => this.setSearchResults(users), () => this.onSearchFailed());
  }

  private setSearchResults(response: any): void {
    try {
      this.searchResults = response.items.map((userData: any) => User.fromResponse(userData));
      this.statusText = `${this.searchResults.length} results`;
    } catch(e) {
      console.error(e);
      this.onSearchFailed();
    }
  }

  private onSearchFailed(): void {
    if (this.queryString) {
      this.searchResults = [];
      this.statusText = 'Search could not be completed.';
    }
  }

}
