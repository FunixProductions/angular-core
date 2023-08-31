import ApiDTO from "../core/dtos/api-dto";
import {CrudHttpClient} from "../core/components/requests/crud-http-client";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {environmentDev} from "../../../environments/environment-dev";

export default abstract class FunixgamingService<DTO extends ApiDTO> extends CrudHttpClient<DTO> {

  protected constructor(http: HttpClient, production: boolean, path: string) {
    super(
      http,
      production ? environment.funixgamingApiUrl : environmentDev.funixgamingApiUrl,
      path
    );
  }

}
