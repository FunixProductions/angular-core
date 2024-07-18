import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {environmentDev} from "../../../../../../../environments/environment-dev";
import {Observable} from "rxjs";
import {PacifistaServerInfoDTO} from "../dtos/PacifistaServerInfoDTO";

export class PacifistaServerInfoService {

    private readonly domain: string;
    private readonly path: string = 'essentials/status';
    private readonly http: HttpClient;

    constructor(httpClient: HttpClient, productionEnv: boolean) {
        this.http = httpClient;

        if (productionEnv) {
            this.domain = environment.pacifistaApiUrl;
        } else {
            this.domain = environmentDev.pacifistaApiUrl;
        }
    }

    public getStatus(): Observable<PacifistaServerInfoDTO> {
        return this.http.get<PacifistaServerInfoDTO>(this.domain + this.path, {
            headers: this.getHeaders()
        });
    }

    private getHeaders(): HttpHeaders {
        return  new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

}