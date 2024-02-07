import {ApiDTO} from "../../dtos/api-dto";
import {CrudHttpClient} from "./crud-http-client";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

export class StorageHttpClient<DTO extends ApiDTO> extends CrudHttpClient<DTO> {

    protected constructor(http: HttpClient, domain: string, path: string) {
        super(http, domain, path);
    }

    sendFile(request: DTO, file: File): Observable<DTO> {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('dto', JSON.stringify(request));

        return this.http.post<DTO>(this.domain + this.path + '/file', formData, {headers: this.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

}
