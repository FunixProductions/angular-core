import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import {environmentDev} from "../../../../../../environments/environment-dev";
import {environment} from "../../../../../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {PacifistaWebUserLinkDTO} from "../dtos/PacifistaWebUserLinkDTO";

export class PacifistaWebUserLinkService extends CrudHttpClient<PacifistaWebUserLinkDTO> {

    publicUrl: string;

    constructor(protected httpClient: HttpClient, production: boolean) {
        const domain = production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl;
        const path = "web/user/link";

        super(
            httpClient,
            domain,
            path
        );
        this.publicUrl = domain + path + '/public';
    }

    linkUser(minecraftUsername: string): Observable<PacifistaWebUserLinkDTO> {
        return this.httpClient.post<PacifistaWebUserLinkDTO>(this.publicUrl + "/link", minecraftUsername, {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    unlinkUser() {
        return this.httpClient.post(this.publicUrl + "/unlink", null, {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    getCurrentUserLink(): Observable<PacifistaWebUserLinkDTO> {
        return this.httpClient.get<PacifistaWebUserLinkDTO>(this.publicUrl + "/linked", {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

}