export class PacifistaServerInfoDTO {
    onlinePlayers: number;
    playerSlots: number;
    servers: ServerData[];

    constructor(onlinePlayers: number,
                playerSlots: number,
                servers: ServerData[]) {
        this.onlinePlayers = onlinePlayers;
        this.playerSlots = playerSlots;
        this.servers = servers;
    }
}

export class ServerData {
    name: string;
    isOnline: boolean;
    onlinePlayers: number;
    playerSlots: number;
    players: PacifistaServerPlayer[];

    constructor(name: string,
                isOnline: boolean,
                onlinePlayers: number,
                playerSlots: number,
                players: PacifistaServerPlayer[]) {
        this.name = name;
        this.isOnline = isOnline;
        this.onlinePlayers = onlinePlayers;
        this.playerSlots = playerSlots;
        this.players = players;
    }
}

export class PacifistaServerPlayer {
    name: string;
    uuid: string;

    constructor(name: string, uuid: string) {
        this.name = name;
        this.uuid = uuid;
    }
}