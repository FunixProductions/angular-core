import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FunixprodHttpClient} from "../../../core/components/requests/funixprod-http-client";
import {Observable} from "rxjs";
import {TwitchEventSubListDTO} from "../dtos/TwitchEventSubListDTO";
import {environmentDev} from "../../../../../environments/environment-dev";

export class TwitchEventsubService extends FunixprodHttpClient {

  url: string;

  constructor(protected httpClient: HttpClient, production: boolean) {
    super();
    this.url = (production ? environment.funixproductionsApiUrl : environmentDev.funixproductionsApiUrl) + 'twitch/eventsub';
  }

  getAppSubscriptions(): Observable<TwitchEventSubListDTO> {
    return this.httpClient.get<TwitchEventSubListDTO>(this.url, {headers: super.getHeaders()});
  }

  createSubscription(streamerUsername: string = 'funixgaming'): Observable<any> {
    return this.httpClient.post<any>(this.url, streamerUsername, {headers: super.getHeaders()});
  }

  deleteSubscription(streamerUsername: string = 'funixgaming'): Observable<any> {
    const httpParams: HttpParams = new HttpParams().set('streamer_username', streamerUsername);

    return this.httpClient.delete(this.url, {
      params: httpParams,
      headers: super.getHeaders()
    })
  }
}
