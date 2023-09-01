import {ApiWebsocket} from "../../../../core/components/websocket/ApiWebsocket";
import {environment} from "../../../../../../environments/environment";
import {environmentDev} from "../../../../../../environments/environment-dev";

export default class PacifistaSupportTicketMessageWebsocketService extends ApiWebsocket {

  constructor(production: boolean) {
    super(
      production ? environment.pacifistaWebsocketUrl : environmentDev.pacifistaWebsocketUrl,
      'support/ticket/message/web/ws'
    );
  }

}
