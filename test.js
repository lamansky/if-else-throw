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

  it('should allow Z to be a class', function () {
    assert.throws(() => { ifElseThrow(false, '', RangeError) }, RangeError)
  })

  it('should wrap a Z string in an Error', function () {
    let error
    try {
      ifElseThrow(false, null, 'Test')
    } catch (e) {
      error = e
    }
    assert(error instanceof Error)
    assert.strictEqual(error.message, 'Test')
  })

  it('should allow Y to be omitted', function () {
    assert.strictEqual(ifElseThrow(true, RangeError), true)
    let error
    try {
      ifElseThrow(false, RangeError)
    } catch (e) {
      error = e
    }
    assert(error instanceof RangeError)
  })

  it('should allow Y and Z to be omitted', function () {
    let error
    try {
      ifElseThrow(false)
    } catch (e) {
      error = e
    }
    assert(error instanceof Error)
  })
})
