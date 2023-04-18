import ErrorService from "../services/errorService.js"

export const notFound = (req, res, next) => {
    const error = `Not found - ${req.originalUrl}`
    res.status(404)
    next(error)
}
export const errorHandler = (err, req, res, next) => {
    if (err instanceof ErrorService) {
        return res.status(err.status).json({ message: err.message, errors: err.errors });
      }
    
      return res.status(500).json({  message: "Internal server error"  });
}
export default { notFound, errorHandler }