import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {IncomeDto} from "../dtos/income-dto";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {environmentDev} from "../../../../../environments/environment-dev";

export class IncomeAccountingService extends CrudHttpClient<IncomeDto> {

    constructor(httpClient: HttpClient, production: boolean) {
        super(
            httpClient,
            production ? environment.funixproductionsApiUrl : environmentDev.funixproductionsApiUrl,
            'accounting/income'
        );
    }

}
