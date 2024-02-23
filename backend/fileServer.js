// Serwer zapisu/odczytu danych w JSON
require('dotenv').config();

// const { publicKey, privateKey, decrypt, encrypt } =  require('./encryption/encryption.js')

const express = require('express')
const app = express()
const cors = require('cors')
const server = require('http').createServer(app)

const whl = process.env.WHITE_LISTED_DOMAIN//.split(',')

const corsOptions = {
    origin: function (origin, callback) {
        if (!whl) {     // Change to if (whl.indexOf(origin) !== -1)
            callback(null, true)
        }
        else {
            throw new Error('Not allowed by CORS')
        }
    },
    optionsSuccessStatus: 200,
}

const port = process.env.PORT || 3001
const fs = require('fs')
const dataPath = './backend/data/data.json'

app.get('/todo', cors(corsOptions), (req, res, next) => {
    // auth(req, res)

    fs.readFile(`${dataPath}`, (err, data) => {
        if (err) {
            res.status(500).send('Internal server error')
            return
        }
        res.status(200).send(data)
    })
})

app.post('/todo', cors(corsOptions), (req, res, next) => {
    // auth(req, res)

    fs.writeFile(`${dataPath}`, JSON.stringify(req.body), (err) => {
        if (err) {
            res.status(500).send('Internal server error')
            return
        }

        res.status(200).send('Data saved')
    })
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});



function auth(req, res) {
    if (req.get('Authorization') === process.env.AUTHORIZATION) {
        res.status(401).send('Unauthorized')
    }
}
