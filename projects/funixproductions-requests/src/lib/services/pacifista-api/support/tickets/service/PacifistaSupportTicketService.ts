import {CrudHttpClient} from "../../../../core/components/requests/crud-http-client";
import PacifistaSupportTicketDTO, {TicketStatus} from "../dtos/PacifistaSupportTicketDTO";
import {environment} from "../../../../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Paginated} from "../../../../core/dtos/paginated";
import {environmentDev} from "../../../../../../environments/environment-dev";

export default class PacifistaSupportTicketService extends CrudHttpClient<PacifistaSupportTicketDTO> {

  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'support/ticket'
    );
  }

  fetchUserTickets(page: number = 0, elemsPerPage: number = 10, ticketStatus: TicketStatus[] = []): Observable<Paginated<PacifistaSupportTicketDTO>> {
    const params = {
      page: page.toString(),
      elemsPerPage: elemsPerPage.toString(),
      ticketStatus: ticketStatus.length === 0 ? 'all' : '[' + ticketStatus.join('|') + ']'
    }

    return this.httpClient.get<Paginated<PacifistaSupportTicketDTO>>(
      this.domain + this.path + '/web',
      {headers: super.getHeaders(), params: params},
    );
  }

  createTicketFromWeb(request: PacifistaSupportTicketDTO, captchaCode: string): Observable<PacifistaSupportTicketDTO> {
    return this.httpClient.post<PacifistaSupportTicketDTO>(
      this.domain + this.path + '/web',
      request,
      {
        headers: super.getHeaders(captchaCode)
      }
    )
  }

  sendFcm(fcm: string): Observable<void> {
    return this.httpClient.post<void>(
      this.domain + this.path + '/web/fcm',
      fcm,
      {
        headers: super.getHeaders()
      }
    )
  }
}
