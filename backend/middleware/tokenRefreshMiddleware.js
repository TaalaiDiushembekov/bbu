import ErrorService from "../services/errorService.js";
import TokenService from "../services/tokenService.js";

const tokenRefreshMiddleware = (req,res,next) => {
    try {
        const {refreshToken} = req.cookies; 

        if(!refreshToken) {
            throw ErrorService.UnauthorizedError()
        }
        const userData = TokenService.validateRefreshToken(refreshToken);

        req.user = userData

        next()
    } catch (error) {
        next(error)
    }
}

export default tokenRefreshMiddleware
