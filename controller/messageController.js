const express = require('express')
const path = require('path')

const urlEncodedParser = express.urlencoded({extended:false})

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ]

module.exports = app => {
    // Displays all messages
    app.get('/', (req, res) => {
        res.render('index.ejs', {title: "Mini MessageBoard", Messages: messages})
    })

    app.get('/new', (req, res) => {
        res.render('form.ejs')
    })

    app.post('/new', urlEncodedParser, (req, res, next) => {
        try {
            messages.push({
                text: req.body.message,
                user: req.body.author,
                added: new Date()
            })
            res.redirect('/')
        } catch(err) {
            res.status(400).send({message: err.message})
        }
       
    })
}
