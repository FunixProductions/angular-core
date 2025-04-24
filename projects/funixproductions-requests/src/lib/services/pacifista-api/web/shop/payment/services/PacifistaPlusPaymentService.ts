import {FunixprodHttpClient} from "../../../../../core/components/requests/funixprod-http-client";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {environmentDev} from "../../../../../../../environments/environment-dev";
import {catchError, Observable, throwError} from "rxjs";
import {PaypalSubscriptionDTO} from "../../../../../funixproductions-api/billing/dtos/PaypalSubscriptionDTO";

export class PacifistaPlusPaymentService extends FunixprodHttpClient {

    url: string;

    constructor(protected httpClient: HttpClient, production: boolean) {
        super();
        this.url = production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl + 'web/shop/pacifistaplus';
    }

    createSubscription(): Observable<PaypalSubscriptionDTO> {
        return this.httpClient.post<PaypalSubscriptionDTO>(this.url, null, {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    getSubscriptionStatus(): Observable<PaypalSubscriptionDTO> {
        return this.httpClient.get<PaypalSubscriptionDTO>(this.url, {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    pauseSubscription(): Observable<PaypalSubscriptionDTO> {
        return this.httpClient.post<PaypalSubscriptionDTO>(this.url + '/pause', null, {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    resumeSubscription(): Observable<PaypalSubscriptionDTO> {
        return this.httpClient.post<PaypalSubscriptionDTO>(this.url + '/resume', null, {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    cancelSubscription(): Observable<PaypalSubscriptionDTO> {
        return this.httpClient.post<PaypalSubscriptionDTO>(this.url + '/cancel', null, {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

}
