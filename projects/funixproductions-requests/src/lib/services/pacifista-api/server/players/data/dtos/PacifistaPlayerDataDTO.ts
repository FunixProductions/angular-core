import {MinecraftPlayerDataDTO} from "../../../../core/dtos/MinecraftPlayerDataDTO";

export class PacifistaPlayerDataDTO extends MinecraftPlayerDataDTO {
  playTime?: Number
  lastConnection?: Date
  firstConnection?: Date
  acceptPayments?: boolean
  acceptTeleportation?: boolean
  acceptPingSoundTagMessage?: boolean
}
