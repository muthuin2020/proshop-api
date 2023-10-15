const notFoundError = (req, res, next) => {
    res.status(404)
    next(new Error(`Not Found - ${req.originalUrl}`))
}

const erroHandler = (err, req, res, next) => {
    let statuscode = res.statuscode = 200 ? 500 : res.statuscode
    let message = err.message

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statuscode = 404;
        message = 'Resource not found'
    }

    res.status(statuscode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? ' not found' : err.stack
    })
}

export { erroHandler, notFoundError }