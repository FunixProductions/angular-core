import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {FunixprodBillingDto} from "../dtos/funixprod-billing-dto";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {environmentDev} from "../../../../../environments/environment-dev";

export class FunixprodBillingService extends CrudHttpClient<FunixprodBillingDto> {

    constructor(httpClient: HttpClient, production: boolean) {
        super(
            httpClient,
            production ? environment.funixproductionsApiUrl : environmentDev.funixproductionsApiUrl,
            "billing/user"
        );
    }

    downloadInvoice(invoiceId: string) {
        this.http.get<Blob>(this.domain + this.path + '/' + invoiceId + '/invoice', {
            headers: super.getHeaders()
        }).subscribe({
            next: (data: Blob) => {
                const blob = new Blob([data], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'funixproductions_facture_' + invoiceId + '.pdf';
                link.click();
            }
        });
    }

}