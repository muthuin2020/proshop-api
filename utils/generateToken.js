import jwt from "jsonwebtoken"

export const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, { expiresIn: '10d' })
    //console.log(token)
    res.cookie('jwt', token, {
        maxAge: 10 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        samesite: 'strict',
        secure: process.env.NODE_ENV !== 'development'
    })
}