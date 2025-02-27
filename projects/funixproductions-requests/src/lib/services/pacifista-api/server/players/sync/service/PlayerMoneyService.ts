import {HttpClient} from "@angular/common/http";
import {CrudHttpClient} from "../../../../../core/components/requests/crud-http-client";
import {PlayerMoneyDTO} from "../dtos/PlayerMoneyDTO";
import {environment} from "../../../../../../../environments/environment";
import {environmentDev} from "../../../../../../../environments/environment-dev";

export class PlayerMoneyService extends CrudHttpClient<PlayerMoneyDTO> {
  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'playersync/money'
    );
  }
}
