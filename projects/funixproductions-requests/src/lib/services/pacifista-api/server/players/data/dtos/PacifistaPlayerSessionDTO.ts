import {MinecraftPlayerDataDTO} from "../../../../core/dtos/MinecraftPlayerDataDTO";

export class PacifistaPlayerSessionDTO extends MinecraftPlayerDataDTO {
  connectedAt?: Date
  disconnectedAt?: Date
}
