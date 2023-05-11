import TokenService from '../services/tokenService.js'
import ErrorService  from '../services/errorService.js'


const authMiddleware = async (req, res, next) =>{
    if(req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        // console.log("token ***********", token)
        if(!token){
            return next(ErrorService.UnauthorizedError())
        }
        const userData = TokenService.validateAccessToken(token)
        if(!userData){
            next(ErrorService.UnauthorizedError())
        }
        req.user = userData;
        next()
    } catch (error) {
        next(ErrorService.UnauthorizedError())
    }
}

export default authMiddleware;