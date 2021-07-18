const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

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
app.listen(port, () => console.log(`Server running at http://127.0.0.1:${port}/`))