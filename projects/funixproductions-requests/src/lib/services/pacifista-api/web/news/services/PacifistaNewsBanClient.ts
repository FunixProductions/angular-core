import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import {PacifistaNewsBanDTO} from "../dtos/ban/PacifistaNewsBanDTO";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
import {environmentDev} from "../../../../../../environments/environment-dev";

export class PacifistaNewsBanClient extends CrudHttpClient<PacifistaNewsBanDTO> {

    constructor(http: HttpClient, production: boolean) {
        super(
            http,
            production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
            'web/news/bans'
        );
    }

}
