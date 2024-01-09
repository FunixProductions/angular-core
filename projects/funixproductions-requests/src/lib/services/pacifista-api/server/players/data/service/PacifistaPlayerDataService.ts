import {CrudHttpClient} from "../../../../../core/components/requests/crud-http-client";
import {PacifistaPlayerDataDTO} from "../dtos/PacifistaPlayerDataDTO";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {environmentDev} from "../../../../../../../environments/environment-dev";

export class PacifistaPlayerDataService extends CrudHttpClient<PacifistaPlayerDataDTO> {
  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'playerdata/data'
    );
  }
}
