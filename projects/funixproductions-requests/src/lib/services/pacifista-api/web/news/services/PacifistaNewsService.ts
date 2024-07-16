import {CrudHttpClient, RequestParams} from "../../../../core/components/requests/crud-http-client";
import {environment} from "../../../../../../environments/environment";
import {environmentDev} from "../../../../../../environments/environment-dev";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {PacifistaNewsDTO} from "../dtos/PacifistaNewsDTO";
import {PageOption, Paginated} from "../../../../core/dtos/paginated";
import {QueryBuilder} from "../../../../core/components/query.builder";
import {catchError, Observable, throwError} from "rxjs";

export class PacifistaNewsService extends CrudHttpClient<PacifistaNewsDTO> {

  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
        httpClient,
        production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
        'web/news'
    );
  }

  override find(options: PageOption, queryBuilder: QueryBuilder): Observable<Paginated<PacifistaNewsDTO>> {
    const params: RequestParams = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort!,
      search: (queryBuilder === null ? '' : queryBuilder.get())
    };

    return this.http.get<Paginated<PacifistaNewsDTO>>(this.domain + this.path,
        {
          params: {...params},
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }).pipe(
            catchError((error: HttpErrorResponse) => {
              return throwError(() => this.buildErrorDto(error));
            })
        );
  }
}
