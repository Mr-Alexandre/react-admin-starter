import { httpClient } from '@modules/http-client';
import AuthApiService from '@domain/auth/services/auth/auth.api-service';

const authApiService = new AuthApiService(httpClient);

export default authApiService;
