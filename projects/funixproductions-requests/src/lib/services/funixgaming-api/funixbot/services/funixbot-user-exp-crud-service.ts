import {FunixbotUserExpDto} from "../dtos/funixbot-user-exp-dto";
import {HttpClient} from "@angular/common/http";
import {FunixgamingService} from "../../funixgaming-service";

export class FunixbotUserExpCrudService extends FunixgamingService<FunixbotUserExpDto> {

  constructor(http: HttpClient, production: boolean) {
    super(
      http,
      production,
      "funixbot/user/exp"
    );
  }

}
