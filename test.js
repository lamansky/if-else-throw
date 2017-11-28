'use strict'

const assert = require('assert')
const ifElseThrow = require('.')

describe('ifElseThrow()', function () {
  it('should return Y if X boolean is true', function () {
    const val = 'test'
    assert.strictEqual(ifElseThrow(true, val, new Error()), val)
  })

  it('should return Y if X function returns true', function () {
    const val = 'test'
    assert.strictEqual(ifElseThrow(() => true, val, new Error()), val)
  })

  it('should throw Z if X boolean is false', function () {
    const val = 'test'
    assert.throws(() => { ifElseThrow(false, val, new Error()) })
  })

  it('should throw Z if X function returns false', function () {
    const val = 'test'
    assert.throws(() => { ifElseThrow(() => false, val, new Error()) })
  })

  it('should allow Z to be omitted', function () {
    let error
    try {
      ifElseThrow(false)
    } catch (e) {
      error = e
    }
    assert(error instanceof Error)
  })

  it('should wrap a Z string in an Error', function () {
    let error
    try {
      ifElseThrow(false, null, 'Test')
    } catch (e) {
      error = e
    }
    assert(error instanceof Error)
  })
})
