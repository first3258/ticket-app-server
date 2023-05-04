const Ticket = require('../models/ticket')

exports.createTicket = async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body)
        
        res.status(200).json(ticket)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.findAllTicket = async (req, res) => {
    try {
        const tickets = await Ticket.find()
        res.status(200).json(tickets)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.updateTicket = async (req, res) => {
    const { ticketId } = req.params
    try {
        const currentTicket = await Ticket.findById(ticketId)
        if(!currentTicket) return res.status(404).json('Ticket not found')
        const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, req.body, {new: true})
        res.status(200).json(updatedTicket)
    } catch (err) {
        res.status(500).json(err)
    }
}