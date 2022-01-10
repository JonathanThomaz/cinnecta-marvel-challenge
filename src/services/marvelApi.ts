import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import CryptoJs from 'crypto-js';
import { accessEnv } from 'helpers/acessEnv';

const instance: AxiosInstance = axios.create({
  baseURL: accessEnv<string>(
    'REACT_APP_API_MARVEL',
    'https://gateway.marvel.com/v1/public'
  )
});

instance.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    const configCopy = config;
    const apiKey = accessEnv<string>(
      'REACT_APP_APIKEY',
      'd6e22dd42878f53de7f3aa5fc43b8d27'
    );
    const apiSecret = accessEnv<string>(
      'REACT_APP_APISECRET',
      '7b5bf2b07a8aacbcf9ff850669697a1e1e234e82'
    );
    const timestamp = Math.floor(Date.now() / 1000);
    const hash = CryptoJs.MD5(timestamp + apiSecret + apiKey).toString();
    configCopy.params = { ts: timestamp, apikey: apiKey, hash };
    return configCopy;
  }
);

export default instance;
