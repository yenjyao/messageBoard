const express = require('express')

module.exports = app => {
    // Displays all messages
    app.get('/', (req, res) => {
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
        res.render('index.ejs', {title: "Mini MessageBoard", Messages: messages})
    })

}
