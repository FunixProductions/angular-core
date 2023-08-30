import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {FunixbotUserExpDto} from "../dtos/funixbot-user-exp-dto";
import {HttpClient} from "@angular/common/http";

export class FunixbotUserExpCrudService extends CrudHttpClient<FunixbotUserExpDto> {

  constructor(http: HttpClient, production: boolean) {
    super(
      http,
      production ? 'https://api.funixgaming.fr' : 'https://dev.api.funixgaming.fr',
      "/funixbot/user/exp"
    );
  }

}
