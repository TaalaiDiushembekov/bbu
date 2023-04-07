import express from 'express'
import {
      authUser
    , registerUser
    , getUserProfile
    , getUsers
    , getUsersById
    // , uploadInfo
    , updateUser
    ,uploadInfoTwo
} from "../controllers/userController.js";
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/admin').get(getUsers)
router.route('/admin/:id').get(getUsersById)
// router.post('/uploadInfo', uploadInfo)
router.post('/uploadInfo', updateUser)
router.post('/admin/:id', uploadInfoTwo)


export default router
