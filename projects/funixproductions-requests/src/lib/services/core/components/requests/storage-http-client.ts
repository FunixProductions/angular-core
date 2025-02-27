import {ApiDTO} from "../../dtos/api-dto";
import {CrudHttpClient} from "./crud-http-client";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {FunixprodHttpClient} from "./funixprod-http-client";

export class StorageHttpClient<DTO extends ApiDTO> extends CrudHttpClient<DTO> {

    protected constructor(http: HttpClient, domain: string, path: string) {
        super(http, domain, path);
    }

    sendFile(request: DTO, file: File): Observable<DTO> {
        const formData = new FormData();
        formData.append('dto', new Blob([JSON.stringify(request)], {type: 'application/json'}));
        formData.append('file', file);

        return this.http.post<DTO>(this.domain + this.path + '/file', formData, {headers: this.getHeadersAuth()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    partialUpdateFile(request: DTO, file: File): Observable<DTO> {
        const formData = new FormData();
        formData.append('dto', new Blob([JSON.stringify(request)], {type: 'application/json'}));
        formData.append('file', file);

        return this.http.post<DTO>(this.domain + this.path + '/file-patch', formData, {headers: this.getHeadersAuth()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    fullUpdateFile(request: DTO, file: File): Observable<DTO> {
        const formData = new FormData();
        formData.append('dto', new Blob([JSON.stringify(request)], {type: 'application/json'}));
        formData.append('file', file);

        return this.http.post<DTO>(this.domain + this.path + '/file-put', formData, {headers: this.getHeadersAuth()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    private getHeadersAuth(): HttpHeaders {
        let headers = new HttpHeaders();

        if (typeof localStorage !== 'undefined') {
            const bearerToken: string | null = localStorage.getItem(FunixprodHttpClient.accessTokenLocalStorageName);
            if (bearerToken !== null) {
                headers = headers.append(FunixprodHttpClient.headerAuth, FunixprodHttpClient.bearerPrefix + ' ' + bearerToken);
            }
        }

        return headers;
    }

}
