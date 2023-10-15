import jwt from 'jsonwebtoken'

import asyncHandler from "../middleware/asyncHandler.js"
import User from '../models/userModel.js'
import { generateToken } from '../utils/generateToken.js'


// user routes
export const getMyProfile = asyncHandler(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({ message: 'success', userDetails: { email: user.email, name: user.name, isAdmin: user.isAdmin } })
})

export const registerUser = asyncHandler(async (req, res, next) => {
    const reqBody = req.body;
    if (!reqBody.email) {
        return res.status(400).json({ message: 'Please provide vaild email id...' })
    }
    if (!reqBody.name) {
        return res.status(400).json({ message: 'Please provide user name...' })
    }
    if (!reqBody.password) {
        return res.status(400).json({ message: 'Please provide password...' })
    }

    if (await User.findOne({ email: reqBody.email })) {
        return res.status(400).json({ mesage: 'User email is already registered' })
    }

    const user = await User.create(req.body)
    generateToken(res, user._id)
    res.status(201).json({ message: 'user registered successfully...' })
})

export const loginUser = asyncHandler(async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(401).json({ res: 'please provide both email and password...' })
    }
    const user = await User.findOne({ email: req.body.email })
    if (!user || !(await user.matchPassword(req.body.password))) {
        return res.status(401).json({ res: 'email or password is not correct...' })
    }
    generateToken(res, user._id)
    res.status(200).json({ message: 'success' })
})

export const updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.user._id, req.body)
    res.status(200).json({ message: 'successfully updated' })
})

export const logout = (req, res, next) => {
    res.cookie('jwt', '', { expiresIn: new Date(0) })
    res.status(200).json({ message: 'logout Successfull' })
}

//Admin routes
export const getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find({}).select('-password');
    res.json({ totalUsers: users.length, data: users });
})


export const getUserById = asyncHandler(async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id).select('-password');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (err) {
        res.status(404).json({ error: 'User not found...' })
    }
})

export const deleteUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user)
        return res.status(404).json({ error: 'User not found' })
    await User.deleteOne({ _id: user._id })
    res.json({ message: 'User removed' });

});
