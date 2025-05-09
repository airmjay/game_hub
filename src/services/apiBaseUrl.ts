import axios, {AxiosRequestConfig } from "axios";

export interface fetchData<T> {
  count: number;
  results: T;
}

export const baseURL = axios.create({
  baseURL: "https://api.rawg.io",
  params: {
    key: "15d7855a9bd845a08e07ce5993754a75",
  },
});

class ApiRequest<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  get = async() => {
    return await baseURL.get<fetchData<T[]>>(this.endpoint).then((res) => res.data);
  }
  getWithParam = async(config: AxiosRequestConfig) => {
    return await baseURL.get<fetchData<T[]>>(this.endpoint,config).then((res) => res.data);
  };
  getGameDetail = async() => {
    return await baseURL.get<T>(this.endpoint).then((res) => res.data);
  }
}

export const apiRequest = ApiRequest;
