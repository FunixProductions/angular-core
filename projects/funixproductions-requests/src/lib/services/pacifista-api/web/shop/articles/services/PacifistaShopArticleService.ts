import {environment} from "../../../../../../../environments/environment";
import {environmentDev} from "../../../../../../../environments/environment-dev";
import {HttpClient} from "@angular/common/http";
import {PacifistaShopArticleDTO} from "../dtos/PacifistaShopArticleDTO";
import {StorageHttpClient} from "../../../../../core/components/requests/storage-http-client";

export class PacifistaShopArticleService extends StorageHttpClient<PacifistaShopArticleDTO> {

  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'web/shop/articles'
    );
  }

}
