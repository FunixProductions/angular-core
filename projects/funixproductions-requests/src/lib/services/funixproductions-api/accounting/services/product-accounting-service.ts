import {ProductDTO} from "../dtos/product-dto";
import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {environmentDev} from "../../../../../environments/environment-dev";

export class ProductAccountingService extends CrudHttpClient<ProductDTO> {

    constructor(httpClient: HttpClient, production: boolean) {
        super(
            httpClient,
            production ? environment.funixproductionsApiUrl : environmentDev.funixproductionsApiUrl,
            'accounting/product'
        );
    }

}
