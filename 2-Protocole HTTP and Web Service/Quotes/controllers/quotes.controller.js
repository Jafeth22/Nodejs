const path = require('path')
const DB_PATH = path.join(__dirname, './../data/db.json')
let db = require(DB_PATH)
const fs = require('fs') //fs = File system, to read the files

function render(file, res) {
    return res.sendFile(path.join(__dirname, `./../views/${file}.html`))
}

class QuotesController {
    async index(req, res) {
        return render('quotes', res)
    }

    async get(req, res) {
        return res.send(db)
    }

    async add(req, res) {
        const {body: quote} = req
        const lasQuote = db[db.length - 1]
        const {id} = lasQuote
        quote.id = id + 1
        fs.writeFileSync(DB_PATH, JSON.stringify(db))
        return res.status(201).send()
    }
}

module.exports = new QuotesController()