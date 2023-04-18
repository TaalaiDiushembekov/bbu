class ErrorService extends Error{
    constructor(status, message, errors){
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static BadRequest = (message, errors =[]) =>{
        return new ErrorService(400, message, errors);
    }
    static UnauthorizedError = () =>{
        return new ErrorService(401, 'You are not authorized')
    }
    static ForbiddenError = (message) =>{
        return new ErrorService(403, message);
    }
    static ServerInternalError = () =>{
        return new ErrorService(500, "Something went wrong")
    }
}

export default ErrorService