import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import {environment} from "../../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Paginated} from "../../../../core/dtos/paginated";
import {environmentDev} from "../../../../../../environments/environment-dev";
import {PacifistaSupportTicketMessageDTO} from "../dtos/PacifistaSupportTicketMessageDTO";

export class PacifistaSupportTicketMessageService extends CrudHttpClient<PacifistaSupportTicketMessageDTO> {

  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'support/ticket/message'
    );
  }

  fetchUserTicketMessages(page: number = 0, elemsPerPage: number = 10, ticketId: string): Observable<Paginated<PacifistaSupportTicketMessageDTO>> {
    const params = {
      page: page.toString(),
      elemsPerPage: elemsPerPage.toString(),
      ticketId: ticketId
    };

    return this.httpClient.get<Paginated<PacifistaSupportTicketMessageDTO>>(
      this.domain + this.path + '/web',
      {headers: super.getHeaders(), params: params}
    );
  }

  createTicketMessageFromWeb(request: PacifistaSupportTicketMessageDTO, captchaCode: string): Observable<PacifistaSupportTicketMessageDTO> {
    return this.httpClient.post<PacifistaSupportTicketMessageDTO>(
      this.domain + this.path + '/web',
      request,
      {
        headers: super.getHeaders(captchaCode)
      }
    )
  }
}
