const R = require("../")

describe("prop",()=>{

    it("", () => {
      expect(
        R.prop(
          "foo"
        )({ foo:"baz" })
      ).toEqual("baz")

      expect(
        R.prop(
          "bar"
        )({ foo:"baz" })
      ).toEqual(undefined)
    })

})
