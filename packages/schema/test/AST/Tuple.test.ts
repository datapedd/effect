import * as AST from "@effect/schema/AST"
import { describe, expect, it } from "vitest"

describe("AST.Tuple", () => {
  it("A required element cannot follow an optional element", () => {
    expect(() =>
      new AST.TupleType(
        [new AST.Element(AST.stringKeyword, true), new AST.Element(AST.stringKeyword, false)],
        [],
        true
      )
    ).toThrow(
      new Error("A required element cannot follow an optional element. ts(1257)")
    )
  })

  it("A required rest element cannot follow an optional element", () => {
    expect(() =>
      new AST.TupleType(
        [new AST.Element(AST.stringKeyword, true)],
        [new AST.AnnotatedAST(AST.stringKeyword), new AST.AnnotatedAST(AST.stringKeyword)],
        true
      )
    ).toThrow(
      new Error("A required element cannot follow an optional element. ts(1257)")
    )
  })
})
