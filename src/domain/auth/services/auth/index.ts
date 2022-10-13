import { httpClientService } from '@services/http-client';
import AuthApiService from '@domain/auth/services/auth/auth.api-service';

const authApiService = new AuthApiService(httpClientService);

export default authApiService;
