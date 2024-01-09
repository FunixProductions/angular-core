import {CrudHttpClient} from "../../../../../core/components/requests/crud-http-client";
import {PacifistaPlayerSessionDTO} from "../dtos/PacifistaPlayerSessionDTO";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {environmentDev} from "../../../../../../../environments/environment-dev";

export class PacifistaPlayerSessionsService extends CrudHttpClient<PacifistaPlayerSessionDTO> {
  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'playerdata/session'
    );
  }
}
