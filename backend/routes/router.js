
import {Router} from 'express'
import userRoutes from './userRoutes.js';
import teamRoutes from './teamRoutes.js';
import tariffRoutes from './tariffRoutes.js'
import documentRoutes from './documentRoutes.js'
import orgRoutes from './orgRoutes.js'
import partnerRoutes from './partnerRoutes.js'

const router = Router()


router.use('/users', userRoutes)
router.use('/team', teamRoutes)
router.use('/tariff', tariffRoutes)
router.use('/document', documentRoutes)
router.use('/org', orgRoutes)
router.use('/partner', partnerRoutes)
export default router;