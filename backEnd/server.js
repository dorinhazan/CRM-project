
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const dataJson = require('../../data.json')
const PORT = 8089
const mongoose = require('mongoose')
const moment = require('moment')


app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

// app.use('/', bank)

mongoose.connect("mongodb://localhost/crm", { useNewUrlParser: true }).then(() => {
    app.listen(PORT, function (err, res) {
        console.log("the server runs on port " + PORT)
    })
})

const Schema = mongoose.Schema

const dataSchema = new Schema({
    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: String,
    owner: String,
    country: String
})

const UsersData = mongoose.model('crm', dataSchema)

app.get('/usersData', function (req, res) {
    UsersData.find({}).exec(function (reques, response) {
        res.send(response)
    })
})
// app.get('/monthclients', function (req, res) {
//     let dateToCheck =  moment(new Date()).substract(30, 'days').format("YYYY-MM-DD")

// UsersData.find({
//         "firstContact":
//         {
//            "$gte": dateToCheck,

//         }
//     }).exec(function (reques, response) {
//         res.send(response)
//     })
// })

app.get('/monthclients', function (req, res) {
    let dateToCheck = new Date();
    dateToCheck.setDate(dateToCheck.getDate() - 30)

    UsersData.find({
        'firstContact':
        {
            "$gte": dateToCheck,
        }
    }).exec(function (err, clients) {
        res.send(clients)
    })
})


app.post('/userdata', function (req, res) {
    let data = req.body
    let user = new UsersData({
        name: data.firstName + " " + data.surname,
        country: data.country,
        owner: data.owner,
        firstContact: new Date(),
    })
    user.save()
    res.send(user)
})

app.put('/owner', function (req, res) {
    let data = req.body

    UsersData.findOneAndUpdate({ name: data.name }, { owner: data.owner }, {
        new: true
    }, function (err, expense) {
        res.send(expense)
    })
})

app.put('/email', function (req, res) {
    let data = req.body
    UsersData.findOneAndUpdate({ name: data.name }, { emailType: data.emailType }, {
        new: true
    }, function (err, expense) {
        res.send(expense)
    })
})

app.put('/sold', function (req, res) {
    let data = req.body

    UsersData.findOneAndUpdate({ name: data.name }, { sold: data.sold }, {
        new: true
    }, function (err, expense) {
        res.send(expense)
    })
})

app.put('/popup', function (req, res) {
    let data = req.body
    console.log(data);

    UsersData.findOneAndUpdate({ name: data.firstName + " " + data.surname }, { country: data.country }, {
        new: true
    }, function (err, expense) {
        res.send(expense)
    })
})

