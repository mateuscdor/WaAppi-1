import { Router } from 'express'
import { body, query } from 'express-validator'
import requestValidator from './../middlewares/requestValidator.js'
import sessionValidator from './../middlewares/sessionValidator.js'
import * as controller from './../controllers/chatController.js'
import getMessages from './../controllers/getMessages.js'

const router = Router()

router.get('/get', query('id').notEmpty(), requestValidator, sessionValidator, controller.getList)

router.get('/get/:jid', query('id').notEmpty(), requestValidator, sessionValidator, getMessages)

router.post(
    '/send',
    query('id').notEmpty(),
    body('receiver').notEmpty(),
    body('message'),
    body('type').notEmpty(),
    requestValidator,
    sessionValidator,
    controller.send
)

router.post('/send-bulk', query('id').notEmpty(), requestValidator, sessionValidator, controller.sendBulk)

export default router
