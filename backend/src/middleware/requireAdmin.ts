import { userType } from "../models/User"
import requireJwtAuth from "./requireJwtAuth"

export default function requireAdmin(req, res, next) {
    requireJwtAuth(req, res, () => {
        const userEntry = req.user as userType
        if (userEntry.role != 'ADMIN') { res.status(401).send(); return; }
        next()
    })

}