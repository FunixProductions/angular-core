import {FunixprodHttpClient} from "../../../../core/components/requests/funixprod-http-client";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
import {environmentDev} from "../../../../../../environments/environment-dev";
import {catchError, Observable, throwError} from "rxjs";
import {Paginated} from "../../../../core/dtos/paginated";
import {VoteDTO} from "../dtos/VoteDTO";
import {VotesCountDTO} from "../dtos/VotesCountDTO";
import {VoteWebsiteDTO} from "../dtos/VoteWebsiteDTO";

export class VoteService extends FunixprodHttpClient {

    private readonly domain: string;
    private readonly path: string = 'web/vote';
    private readonly http: HttpClient;

    constructor(httpClient: HttpClient, productionEnv: boolean) {
        super();
        this.http = httpClient;

        if (productionEnv) {
            this.domain = environment.pacifistaApiUrl;
        } else {
            this.domain = environmentDev.pacifistaApiUrl;
        }
    }

    public getAll(page: number, username?: string, month?: number, year?: number): Observable<Paginated<VoteDTO>> {
        return this.http.get<Paginated<VoteDTO>>(this.domain + this.path, {
            headers: this.getHeaders(),
            params: {
                page: page.toString(),
                username: username ?? "",
                month: month?.toString() ?? "",
                year: year?.toString() ?? ""
            }
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public getTopVoters(month: number, year: number): Observable<VotesCountDTO[]> {
        return this.http.get<VotesCountDTO[]>(this.domain + this.path + "/top", {
            headers: this.getHeaders(),
            params: {
                month: month.toString(),
                year: year.toString()
            }
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public getVoteWebsites(): Observable<VoteWebsiteDTO[]> {
        return this.http.get<VoteWebsiteDTO[]>(this.domain + this.path + "/websites", {
            headers: this.getHeaders()
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public checkVote(voteWebsite: string): Observable<VoteDTO> {
        return this.http.get<VoteDTO>(this.domain + this.path + "/user/" + voteWebsite, {
            headers: super.getHeaders()
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public makeVote(voteWebsite: string, googleRecaptchaCode: string): Observable<VoteDTO> {
        return this.http.post<VoteDTO>(this.domain + this.path + "/user/" + voteWebsite, {}, {
            headers: super.getHeaders(googleRecaptchaCode),
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    protected override getHeaders(captchaCode: string = ''): HttpHeaders {
        return  new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }
}