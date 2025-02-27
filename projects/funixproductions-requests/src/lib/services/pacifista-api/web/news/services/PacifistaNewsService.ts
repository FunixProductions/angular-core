import {environment} from "../../../../../../environments/environment";
import {environmentDev} from "../../../../../../environments/environment-dev";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {PacifistaNewsDTO} from "../dtos/news/PacifistaNewsDTO";
import {Paginated} from "../../../../core/dtos/paginated";
import {catchError, Observable, throwError} from "rxjs";
import {FunixprodHttpClient} from "../../../../core/components/requests/funixprod-http-client";
import {PacifistaNewsLikeDTO} from "../dtos/news/PacifistaNewsLikeDTO";

export class PacifistaNewsService extends FunixprodHttpClient {

    private readonly domain: string;
    private readonly path: string;

    constructor(protected http: HttpClient, production: boolean) {
        super();
        this.domain = production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl;
        this.path = 'web/news';
    }

    public getAllNews(page: number): Observable<Paginated<PacifistaNewsDTO>> {
        return this.http.get<Paginated<PacifistaNewsDTO>>(this.domain + this.path,
            {
                params: {
                    page: page,
                },
                headers: PacifistaNewsService.getHeadersForGetRequest()
            }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public getNewsById(id: string): Observable<PacifistaNewsDTO> {
        return this.http.get<PacifistaNewsDTO>(this.domain + this.path + '/' + id,
            {
                headers: PacifistaNewsService.getHeadersForGetRequest()
            }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public getNewsByName(name: string): Observable<PacifistaNewsDTO> {
        return this.http.get<PacifistaNewsDTO>(this.domain + this.path + '/named/' + name,
            {
                headers: PacifistaNewsService.getHeadersForGetRequest()
            }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public createNews(request: PacifistaNewsDTO, file: File): Observable<PacifistaNewsDTO> {
        let formData = new FormData();
        formData.append('dto', new Blob([JSON.stringify(request)], {type: 'application/json'}));
        formData.append('image', file);

        return this.http.post<PacifistaNewsDTO>(this.domain + this.path, formData, {headers: this.getHeadersForMultiPartRequest()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    public updateNews(request: PacifistaNewsDTO, file?: File): Observable<PacifistaNewsDTO> {
        if (!file) {
            return this.http.put<PacifistaNewsDTO>(this.domain + this.path, request, {headers: this.getHeaders()})
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        return throwError(() => this.buildErrorDto(error));
                    })
                );
        } else {
            let formData = new FormData();
            formData.append('dto', new Blob([JSON.stringify(request)], {type: 'application/json'}));
            formData.append('image', file);

            return this.http.post<PacifistaNewsDTO>(this.domain + this.path + '/file', formData, {headers: this.getHeadersForMultiPartRequest()})
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        return throwError(() => this.buildErrorDto(error));
                    })
                );
        }
    }

    public deleteNews(id: string): Observable<any> {
        const httpParams: HttpParams = new HttpParams().set('id', id);

        return this.http.delete(this.domain + this.path, {
            params: httpParams,
            headers: this.getHeaders()
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        )
    }

    public getLikesOnNews(newsId: string, page: number): Observable<Paginated<PacifistaNewsLikeDTO>> {
        return this.http.get<Paginated<PacifistaNewsLikeDTO>>(this.domain + this.path + '/likes/' + newsId,
            {
                params: {
                    page: page,
                },
                headers: PacifistaNewsService.getHeadersForGetRequest()
            }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public likeNews(newsId: string): Observable<PacifistaNewsLikeDTO> {
        return this.http.post<PacifistaNewsLikeDTO>(this.domain + this.path + '/like/' + newsId, null, {headers: this.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    public removeLikeFromNews(newsId: string): Observable<any> {
        return this.http.delete(this.domain + this.path + '/like/' + newsId, {headers: this.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    static getHeadersForGetRequest(): HttpHeaders {
        let headersToSend = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        if (typeof localStorage !== 'undefined') {
            let bearerToken: string | null = localStorage.getItem(FunixprodHttpClient.accessTokenLocalStorageName);
            if (bearerToken !== null) {
                headersToSend = headersToSend.set(FunixprodHttpClient.headerAuth, FunixprodHttpClient.bearerPrefix + ' ' + bearerToken);
            }
        }

        return headersToSend;
    }

    private getHeadersForMultiPartRequest(): HttpHeaders {
        let headersToSend = new HttpHeaders();

        if (typeof localStorage !== 'undefined') {
            const bearerToken: string | null = localStorage.getItem(FunixprodHttpClient.accessTokenLocalStorageName);
            if (bearerToken !== null) {
                headersToSend = headersToSend.set(FunixprodHttpClient.headerAuth, FunixprodHttpClient.bearerPrefix + ' ' + bearerToken);
            }
        }

        return headersToSend
    }
}
