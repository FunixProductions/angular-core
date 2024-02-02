import {FunixprodHttpClient} from "../../../../../core/components/requests/funixprod-http-client";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {environmentDev} from "../../../../../../../environments/environment-dev";
import {catchError, Observable, throwError} from "rxjs";
import {PacifistaPaymentResponseDTO} from "../dtos/responses/PacifistaPaymentResponseDTO";
import {PacifistaPaymentRequestDTO} from "../dtos/requests/PacifistaPaymentRequestDTO";

export class PacifistaPaymentService extends FunixprodHttpClient {

    url: string;

    constructor(protected httpClient: HttpClient, production: boolean) {
        super();
        this.url = (production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl) + 'web/shop/';
    }

    createOrder(request: PacifistaPaymentRequestDTO): Observable<PacifistaPaymentResponseDTO> {
        return this.httpClient.post<PacifistaPaymentResponseDTO>(this.url, request, {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    getStatus(orderId: string): Observable<PacifistaPaymentResponseDTO> {
        return this.httpClient.get<PacifistaPaymentResponseDTO>(this.url, {
            headers: super.getHeaders(),
            params: new HttpParams().set('paymentExternalOrderId', orderId)
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    captureOrder(orderId: string): Observable<PacifistaPaymentResponseDTO> {
        return this.httpClient.post<PacifistaPaymentResponseDTO>(this.url + 'capture', null, {
            headers: super.getHeaders(),
            params: new HttpParams().set('paymentExternalOrderId', orderId)
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }
}
