import { Request } from "express"
export interface AuthInfo extends Request {
  user: string
}