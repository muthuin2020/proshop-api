import jwt from 'jsonwebtoken'
import User from "../models/userModel.js"

export const isAuthorizedUser = async (req, res, next) => {
    if (!req.cookies.jwt) {
        return res.status(401).json({ error: 'Please provide valid token' })
    }

    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_TOKEN)
    const user = await User.findById(decoded.userId).select('-password')
    if (!user) {
        return res.status(401).json({ message: 'You are not authorized' })
    }

    req.user = user;
    await user.save()
    next()
}

export const isAdmin = (req, res, next) => {
    if (!req.user.isAdmin)
        return res.status(403).json({ message: 'You are not authorized to access this resource' })
    next()
}

