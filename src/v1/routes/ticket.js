const router = require('express').Router()
const ticketController = require('../controllers/ticket')

//create ticket
router.post(
    '/create', 
    ticketController.createTicket
)

//get all tickets
router.get(
    '/',
    ticketController.findAllTicket
)

//update ticket

router.post(
    '/:ticketId',
    ticketController.updateTicket
)



module.exports = router;
