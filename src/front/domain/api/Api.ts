import axios, { AxiosInstance } from 'axios'
import { Option } from 'tsoption'

export class Api {
  public get client() {
    return this.axios
  }

  private readonly axios: AxiosInstance

  public constructor(token: Option<string>, backUrl: string) {
    const authHeaders = token.nonEmpty()
      ? { Authorization: `Bearer ${token.get()}` }
      : {}

    this.axios = axios.create({
      baseURL: backUrl,
      headers: authHeaders,
    })
  }
}
