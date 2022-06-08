const moogoose = require('mongoose')

const Person = moogoose.model('Person', {
    name: String,
    email: String,
    office: String,
    salary: Number,
    approved: Boolean,
})


module.exports = Person