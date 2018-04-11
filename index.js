'use strict'

const errate = require('errate')
const ofn = require('ofn')
const pfn = require('pfn')

const toss = error => { throw errate(error) }

module.exports = ofn([0, 2, 1], (test, val = test, error = new Error()) => pfn(test, test)(val) ? val : toss(error))
