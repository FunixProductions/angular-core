import {FunixbotCommandDto} from "../dtos/funixbot-command-dto";
import {HttpClient} from "@angular/common/http";
import {FunixgamingService} from "../../funixgaming-service";

export class FunixbotCommandsCrudService extends FunixgamingService<FunixbotCommandDto> {

  constructor(http: HttpClient, production: boolean) {
    super(
      http,
      production,
      "funixbot/command"
    );
  }

}
