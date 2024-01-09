import {ApiDTO} from "../../../../../core/dtos/api-dto";

export class PacifistaPlayerDataDTO extends ApiDTO {
  playTime?: Number
  lastConnection?: Date
  firstConnection?: Date
  acceptPayments?: boolean
  acceptTeleportation?: boolean
  acceptPingSoundTagMessage?: boolean
}
