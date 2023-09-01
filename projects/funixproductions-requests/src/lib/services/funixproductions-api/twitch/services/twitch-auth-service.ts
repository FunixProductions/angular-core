import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FunixprodHttpClient} from "../../../core/components/requests/funixprod-http-client";
import {Observable} from "rxjs";
import {TwitchTokenType} from "../enums/TwitchTokenType";
import {environmentDev} from "../../../../../environments/environment-dev";
import {TwitchClientTokenDTO} from "../dtos/TwitchClientTokenDTO";

export class TwitchAuthService extends FunixprodHttpClient {

  url: string;

  constructor(protected httpClient: HttpClient, production: boolean) {
    super();
    this.url = (production ? environment.funixproductionsApiUrl : environmentDev.funixproductionsApiUrl) + 'twitch/auth';
  }

  getAuthClientUrl(tokenType: TwitchTokenType = TwitchTokenType.VIEWER): Observable<string> {
    const httpParams: HttpParams = new HttpParams().set('tokenType', tokenType);

    return this.httpClient.get(this.url + '/clientAuthUrl', {
      headers: super.getHeaders(),
      params: httpParams,
      responseType: "text"
    });
  }

  getTwitchAccessTokenSession(): Observable<TwitchClientTokenDTO> {
    return this.httpClient.get<TwitchClientTokenDTO>(this.url + '/accessToken', {headers: super.getHeaders()});
  }
}
