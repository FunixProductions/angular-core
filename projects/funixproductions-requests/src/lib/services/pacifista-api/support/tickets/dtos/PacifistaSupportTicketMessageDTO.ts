import {ApiDTO} from "../../../../core/dtos/api-dto";
import {PacifistaSupportTicketDTO} from "./PacifistaSupportTicketDTO";

export class PacifistaSupportTicketMessageDTO extends ApiDTO {
  ticket?: PacifistaSupportTicketDTO;
  writtenByName?: string;
  writtenById?: string;
  message?: string;
}
