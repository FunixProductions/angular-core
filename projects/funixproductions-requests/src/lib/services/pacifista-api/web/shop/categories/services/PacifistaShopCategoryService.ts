import {CrudHttpClient} from "../../../../../core/components/requests/crud-http-client";
import PacifistaShopCategoryDTO from "../dtos/PacifistaShopCategoryDTO";
import {environment} from "../../../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {environmentDev} from "../../../../../../../environments/environment-dev";

export default class PacifistaShopCategoryService extends CrudHttpClient<PacifistaShopCategoryDTO> {

  constructor(httpClient: HttpClient, production: boolean) {
    super(
      httpClient,
      production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl,
      'web/shop/categories'
    );
  }

}
