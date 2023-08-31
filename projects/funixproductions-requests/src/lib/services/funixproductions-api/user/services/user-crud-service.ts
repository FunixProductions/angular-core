import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {UserDTO} from "../dtos/user-dto";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {environmentDev} from "../../../../../environments/environment-dev";

export class UserCrudService extends CrudHttpClient<UserDTO> {

  constructor(httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.funixproductionsApiUrl : environmentDev.funixproductionsApiUrl,
      'user'
    );
  }

}
