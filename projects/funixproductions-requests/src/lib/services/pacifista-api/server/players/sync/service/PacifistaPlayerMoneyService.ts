import {HttpClient} from "@angular/common/http";
import {CrudHttpClient} from "projects/funixproductions-requests/src/public-api";
import {PacifistaPlayerMoneyDTO} from "../dtos/PacifistaPlayerMoneyDTO";
import {environment} from "projects/funixproductions-requests/src/environments/environment";
import {environmentDev} from "projects/funixproductions-requests/src/environments/environment-dev";

export class PacifistaPlayerMoneyService extends CrudHttpClient<PacifistaPlayerMoneyDTO> {
  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'playersync/money'
    );
  }
}
