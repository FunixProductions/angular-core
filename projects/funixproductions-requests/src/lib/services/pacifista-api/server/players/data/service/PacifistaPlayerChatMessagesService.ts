import {CrudHttpClient} from "../../../../../core/components/requests/crud-http-client";
import {PacifistaPlayerChatMessageDTO} from "../dtos/PacifistaPlayerChatMessageDTO";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {environmentDev} from "../../../../../../../environments/environment-dev";

export class PacifistaPlayerChatMessagesService extends CrudHttpClient<PacifistaPlayerChatMessageDTO> {
  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'playerdata/chatmessages'
    );
  }
}
