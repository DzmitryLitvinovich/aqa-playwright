import { RequestApi } from 'api/apiClients/request';
import { apiConfig } from 'config/api-config';
import { ILoginResponse, IRequestOptions } from 'types/api.types';
import { ICredentials } from 'types/signIn.types';

export class SignInController {
  constructor(private request = new RequestApi()) {}

  async login(body: ICredentials) {
    const options: IRequestOptions = {
      url: apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN,
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      data: body,
    };
    return await this.request.send<ILoginResponse>(options);
  }
}