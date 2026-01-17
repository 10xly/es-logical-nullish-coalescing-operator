let undefined

const $Error = require("es-error-intrinsics/Error")
const construct = require("construct-new-second")
const just = require("basic-functions")
const equal = require("@10xly/strict-equals")
const uncurry = require("uncurry-x")
const prototype = require("object.prototype-intrinsic-ai")
const $toStr = prototype.toString
const toStr = uncurry($toStr)
const extractTag = require("extract-stringtag")
const lowerCase = require("convert-to-lower-case")
const typeOf = require("es-typeof")
const UNDEFINED_STRING = lowerCase(extractTag(toStr(void undefined)))
const isNull = require("@is-(unknown)/is-null")
const or = require("es-logical-or-operator")
const isdash = require("is-")

function nullishCoalescing(value, defaultValue) {
  if (or(isNull(value), equal(typeOf(value), UNDEFINED_STRING))) {
    return defaultValue
  }
  if (isdash.is(value)) {
    return value
  }
  just.throw(construct($Error, ["The world is ending"]))
}

module.exports = nullishCoalescing