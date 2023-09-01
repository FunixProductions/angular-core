import {CrudHttpClient} from "../../../../../core/components/requests/crud-http-client";
import PacifistaShopArticleDTO from "../dtos/PacifistaShopArticleDTO";
import {environment} from "../../../../../../../environments/environment";
import {environmentDev} from "../../../../../../../environments/environment-dev";
import {HttpClient} from "@angular/common/http";

export default class PacifistaShopArticleService extends CrudHttpClient<PacifistaShopArticleDTO> {

  constructor(protected httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'web/shop/articles'
    );
  }

}
