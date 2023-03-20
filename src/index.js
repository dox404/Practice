const express = require('express')
const path = require('path')
const hbs = require('hbs')

const db = require('../db/index')

const app = express()

const PORT = 8000

// const partial_path = path.join(__dirname, '../templates/partials')
// const template_path = path.join(__dirname, '../templates/views')



app.use(express.json())
// app.use(CookieParser())
app.use(express.urlencoded({ extended: false }))

// hbs.registerPartials(partial_path)
//setting view engine
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname))
app.get('/', (req, res) => {
    res.render("This is homepage")
})

// app.get('/',(req, res) => {
 
// })

app.get('/login',(req,res)=>{
    res.render('index')
})

app.post('/login',async(req,res)=>{
    try {
        const data = new Employee({
            name: req.body.username,
            email: req.body.password
        })
       await data.save()
        res.status(201).redirect('/')
    } catch (e) {
        console.log(e)
    }

    // const user=req.body
    // console.log(user)

})
app.listen(PORT, (req, res) => {

    console.log(`Server is listing to ${PORT}`)
})