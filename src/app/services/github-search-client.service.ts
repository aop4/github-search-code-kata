import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GithubSearchClient {

  private static readonly BASE_URL = 'https://api.github.com/search/users';

  constructor(private httpClient: HttpClient) { }

  public searchForUser(queryString: string): Promise<object> {
    if (!queryString) {
      return Promise.reject();
    }
    let params: HttpParams = new HttpParams({
      fromObject: {
        'q': queryString
      }
    });

    return firstValueFrom(this.httpClient.get(GithubSearchClient.BASE_URL, {params: params}));
  }

}
