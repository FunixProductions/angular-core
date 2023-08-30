import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import {FunixbotCommandDto} from "../dtos/funixbot-command-dto";
import {HttpClient} from "@angular/common/http";

export class FunixbotCommandsCrudService extends CrudHttpClient<FunixbotCommandDto> {

  constructor(http: HttpClient, production: boolean) {
    super(
      http,
      production ? 'https://api.funixgaming.fr' : 'https://dev.api.funixgaming.fr',
      "/funixbot/command"
    );
  }

}
