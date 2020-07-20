import { Request } from "express"
export interface AuthInfo extends Request {
  token: string
}