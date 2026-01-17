const expect = require("chai").expect
const nullishCoalescing = require("./index")

describe("nullishCoalescing", () => {
  describe("nullish inputs", () => {
    it("should return the default value when the input is null", () => {
      const result = nullishCoalescing(null, "fallback")
      expect(result).to.equal("fallback")
    })

    it("should return the default value when the input is undefined", () => {
      const result = nullishCoalescing(undefined, "fallback")
      expect(result).to.equal("fallback")
    })

    it("should return the default value when the input is void 0", () => {
      const result = nullishCoalescing(void 0, "fallback")
      expect(result).to.equal("fallback")
    })
  })

  describe("valid inputs", () => {
    it("should return the string when provided", () => {
      const result = nullishCoalescing("hello", "fallback")
      expect(result).to.equal("hello")
    })

    it("should return an empty string (not nullish)", () => {
      const result = nullishCoalescing("", "fallback")
      expect(result).to.equal("")
    })

    it("should return 0 (not nullish)", () => {
      const result = nullishCoalescing(0, "fallback")
      expect(result).to.equal(0)
    })

    it("should return false (not nullish)", () => {
      const result = nullishCoalescing(false, "fallback")
      expect(result).to.equal(false)
    })

    it("should return an object when provided", () => {
      const obj = { enterprise: "ai" }
      const result = nullishCoalescing(obj, "fallback")
      expect(result).to.equal(obj)
    })
  })
})