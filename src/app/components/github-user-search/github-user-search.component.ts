import { Component, OnInit } from '@angular/core';
import { GithubApiClient } from '../../services/github-api-client.service';
import { User } from '../../models/user';

@Component({
  selector: 'github-user-search',
  templateUrl: './github-user-search.component.html',
  styleUrls: ['./github-user-search.component.scss']
})
export class GithubUserSearchComponent implements OnInit {

  readonly RESULTS_PER_PAGE: number = 10;
  readonly MAX_RESULTS: number = 1000; // GitHub returns the true number of results but exposes only the first 1000.

  queryString: string = '';
  cachedQueryString: string = ''; // the query string used for the most recent search.
  statusText: string = '';
  searchResults: any[] = [];
  totalNumResults: number = 0; // the total number of results GitHub has for a query (only one page of results is retrieved at a time)
  pageNumber: number = 1;

  constructor(private githubApiClient: GithubApiClient) {
  }

  ngOnInit(): void {
  }

  /**
   * Performs a search using a potentially new search term. Resets the current page number accordingly.
   */
  onFormSubmit() {
    this.pageNumber = 1;
    // Cache the search term in case the user changes the search bar text and then selects a new page.
    this.cachedQueryString = this.queryString;
    this.performSearch();
  }

  performSearch(): void {
    this.githubApiClient.searchForUser(this.cachedQueryString, this.pageNumber, this.RESULTS_PER_PAGE)
                            .then((users) => this.setSearchResults(users), () => this.onSearchFailed());
  }

  private setSearchResults(response: any): void {
    try {
      this.searchResults = response.items.map((userData: any) => User.fromResponse(userData));
      this.totalNumResults = response.total_count ? Math.min(this.MAX_RESULTS, response.total_count) : 0;
      this.statusText = `${this.totalNumResults} results`;
      window.scrollTo({
        top: 0
      });
    } catch(e) {
      console.error(e);
      this.onSearchFailed();
    }
  }

  private onSearchFailed(): void {
    if (this.queryString) {
      this.searchResults = [];
      this.statusText = 'Search could not be completed.';
      this.totalNumResults = 0;
      this.pageNumber = 1;
    }
  }

  goToPage(pageNumber: number) {
    if (this.pageNumber !== pageNumber) {
      this.pageNumber = pageNumber;
      this.performSearch();
    }
  }

}
