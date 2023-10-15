import express from 'express'
import { getMyProfile, registerUser, loginUser, logout, updateUser, getAllUsers, getUserById, deleteUser } from '../controller/userController.js'
import { isAdmin, isAuthorizedUser } from '../middleware/userPrevilage.js'

const router = express.Router()



// User routes
// get my profile
router.route('/myProfile').get(isAuthorizedUser, getMyProfile)

// register user
router.route('/register').post(registerUser)

// login user
router.route('/login').post(loginUser)

// update user
router.route('/updateUser').put(isAuthorizedUser, updateUser)

// logout user
router.route('/logout').post(isAuthorizedUser, logout)

//Admin routes
// get all users
router.route('/').get(isAuthorizedUser, isAdmin, getAllUsers)

// get user by Id
router.route('/user/:id').get(isAuthorizedUser, isAdmin, getUserById)

// delete user
router.route('/deleteUser/:id').delete(isAuthorizedUser, isAdmin, deleteUser)


export default router;