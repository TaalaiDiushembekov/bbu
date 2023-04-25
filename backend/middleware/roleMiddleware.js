import ErrorService from "../services/errorService.js"
import TokenService from "../services/tokenService.js"



const roleMiddleware = (rolesArray) => {

    return (req,res,next) => {
        if(req.method === "OPTIONS"){
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            console.log("token ***********", token)
            if(!token){
                return next(ErrorService.UnauthorizedError())
            }
            const userData = TokenService.validateAccessToken(token)

            const {role} = userData;
            let hasRole = false;

            if(rolesArray.includes(role)){
                hasRole = true
            }
            if(!hasRole){
                return next(ErrorService.ForbiddenError('У вас нет прав'))
            }
            next()
        } catch (error) {
            next(ErrorService.UnauthorizedError())
        }
    }

}

export default roleMiddleware