import { userType } from "../models/user";
import requireJwtAuth from "./requireJwtAuth"

export default function consoleLog(req, res, next) {
    console.log(req.title);
    next()
}