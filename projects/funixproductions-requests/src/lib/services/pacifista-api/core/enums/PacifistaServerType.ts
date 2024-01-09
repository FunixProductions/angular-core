export enum PacifistaServerGameMode {
  NEUTRAL = 'NEUTRAL',
  SURVIVAL = 'SURVIVAL',
  CREATIVE = 'CREATIVE',
  SKYBLOCK = 'SKYBLOCK',
  EVENT = 'EVENT'
}

export enum PacifistaServerType {
  HUB = 'HUB',
  CREATIVE = 'CREATIVE',
  EVENT = 'EVENT',
  SURVIE_ALPHA = 'SURVIE_ALPHA',
  SURVIE_BETA = 'SURVIE_BETA',
  SURVIE_RESOURCE = 'SURVIE_RESOURCE'
}

export function getGameModeFromPacifistaServerType(serverType: PacifistaServerType) {
  if (serverType === PacifistaServerType.CREATIVE) {
    return PacifistaServerGameMode.CREATIVE;
  } else if (serverType === PacifistaServerType.EVENT) {
    return PacifistaServerGameMode.EVENT;
  } else if (serverType === PacifistaServerType.SURVIE_ALPHA || serverType === PacifistaServerType.SURVIE_BETA || serverType === PacifistaServerType.SURVIE_RESOURCE) {
    return PacifistaServerGameMode.SURVIVAL;
  } else {
    return PacifistaServerGameMode.NEUTRAL;
  }
}
