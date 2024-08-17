import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import {PacifistaSanctionDTO} from "../dtos/PacifistaSanctionDTO";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
import {environmentDev} from "../../../../../../environments/environment-dev";

export class PacifistaSanctionService extends CrudHttpClient<PacifistaSanctionDTO> {

    constructor(protected httpClient: HttpClient, production: boolean) {
        super(
            httpClient,
            production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
            'sanctions'
        );
    }

}