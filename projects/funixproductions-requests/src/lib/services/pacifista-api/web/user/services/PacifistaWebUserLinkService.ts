import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import {environmentDev} from "../../../../../../environments/environment-dev";
import {environment} from "../../../../../../environments/environment";
import {PacifistaPaymentResponseDTO} from "../../shop/payment/dtos/responses/PacifistaPaymentResponseDTO";
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

export class PacifistaWebUserLinkService extends CrudHttpClient<PacifistaWebUserLinkService> {

    publicUrl: string;

    constructor(protected http: HttpClient, production: boolean) {
        super(
            http,
            production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
            "web/user/link"
        );
        this.publicUrl = super.domain + super.path + '/public';
    }

    linkUser(minecraftUsername: string): Observable<PacifistaWebUserLinkService> {
        return this.httpClient.post<PacifistaPaymentResponseDTO>(this.publicUrl + "/link", minecraftUsername, {headers: super.getHeaders()})
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

    getCurrentUserLink(): Observable<PacifistaPaymentResponseDTO> {
        return this.httpClient.get<PacifistaPaymentResponseDTO>(this.publicUrl + "/linked", {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

}