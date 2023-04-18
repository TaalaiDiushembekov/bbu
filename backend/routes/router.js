
import {Router} from 'express'
import userRoutes from './userRoutes.js';
import teamRoutes from './teamRoutes.js';
import tariffRoutes from './tariffRoutes.js'
const router = Router()


router.use('/users', userRoutes)
router.use('/team', teamRoutes)
router.use('/tariff', tariffRoutes)



export default router;