import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import {environment} from "../../../../../../environments/environment";
import {environmentDev} from "../../../../../../environments/environment-dev";
import {HttpClient} from "@angular/common/http";
import {PacifistaNewsDTO} from "../dtos/PacifistaNewsDTO";

export class PacifistaNewsService extends CrudHttpClient<PacifistaNewsDTO> {

  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'web/news'
    );
  }
}
