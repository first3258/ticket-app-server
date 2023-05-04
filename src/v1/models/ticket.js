const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    contact: {
        type: String
    },
    information: {
        type: String
    },
    status: {
        type: String
    }
}, {
    timestamps: true 
  })

module.exports = mongoose.model('Ticket', ticketSchema)