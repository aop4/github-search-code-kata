import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GithubApiClient {

  private static readonly BASE_URL = 'https://api.github.com';

  constructor(private httpClient: HttpClient) { }

  public searchForUser(userSearchTerm: string, page: number, resultsPerPage: number): Promise<object> {
    if (!userSearchTerm || page <= 0 || resultsPerPage <= 0) {
      return Promise.reject();
    }
    let params: HttpParams = new HttpParams({
      fromObject: {
        'q': userSearchTerm,
        'page': page,
        'per_page': resultsPerPage
      }
    });

    return firstValueFrom(this.httpClient.get(`${GithubApiClient.BASE_URL}/search/users`, {params: params}));
  }

  public getUserDetail(username: string): Promise<object> {
    if (!username) {
      return Promise.reject();
    }
    return firstValueFrom(this.httpClient.get(`${GithubApiClient.BASE_URL}/users/${username}`));
  }

}
