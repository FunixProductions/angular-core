import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageOption, Paginated} from "../../dtos/paginated";
import {QueryBuilder} from "../query.builder";
import {FunixprodHttpClient} from "./funixprod-http-client";
import {ApiDTO} from "../../dtos/api-dto";

interface RequestParams {
  elemsPerPage?: number;
  page?: number;
  sort?: string;
  search?: string;
}

export abstract class CrudHttpClient<DTO extends ApiDTO> extends FunixprodHttpClient {

  protected readonly domain: string;
  protected readonly path: string;

  protected constructor(protected http: HttpClient, domain: string, path: string) {
    super();
    this.domain = domain;
    this.path = path;
  }

  /**
   * Find and search
   * @param options set the data returned amount
   * @param queryBuilder can be null new QueryBuilder().addParam({key: "mdr", type: QueryBuilder.like, value: "mdr"})
   */
  find(options: PageOption, queryBuilder: QueryBuilder): Observable<Paginated<DTO>> {
    const params: RequestParams = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort!,
      search: (queryBuilder === null ? '' : queryBuilder.get())
    };

    return this.http.get<Paginated<DTO>>(this.domain + this.path, {headers: super.getHeaders(), params: {...params}});
  }

  getById(id: string): Observable<DTO> {
    return this.http.get<DTO>(this.domain + this.path + "/" + id, {headers: super.getHeaders()});
  }

  create(dto: DTO): Observable<DTO> {
    return this.http.post<DTO>(this.domain + this.path, dto, {headers: super.getHeaders()})
  }

  patch(dto: DTO): Observable<DTO> {
    return this.http.patch<DTO>(this.domain + this.path, dto, {headers: super.getHeaders()})
  }

  update(dto: DTO): Observable<DTO> {
    return this.http.put<DTO>(this.domain + this.path, dto, {headers: super.getHeaders()})
  }

  delete(id: string): Observable<any> {
    const httpParams: HttpParams = new HttpParams().set('id', id);

    return this.http.delete(this.domain + this.path, {
      params: httpParams,
      headers: super.getHeaders()
    })
  }
}
