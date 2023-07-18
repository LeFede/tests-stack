import { describe, it, expect, beforeEach } from "vitest"
import { Stack } from "#root"

describe("Stack", () => {
  let stack 

  beforeEach(() => {
    stack = new Stack()
  })

  it("correctly exports class Stack", () => {
    expect(stack).toBeInstanceOf(Stack)
  })

  it("has the correct starting values", () => {
    expect(stack.top).toBe(-1)
    expect(stack.items).toEqual({})
  })

  it("push() correctly pushes elements", () => {
    stack.push("Item 0")
    stack.push("Item 1")
    expect(stack.top).toBe(1)
    expect(stack.items[0]).toBe("Item 0")
    expect(stack.items[1]).toBe("Item 1")
    expect(stack.items).toEqual({
      0: "Item 0",
      1: "Item 1"
    })
  })

  it("pop() correctly pops elements", () => {
    stack.push("Item 0")
    expect(stack.pop()).toBe("Item 0")
    expect(stack.peek()).toBe("No elements left")
    expect(stack.top).toBe(-1)
    stack.push("Item 0")
    stack.push("Item 1")
    expect(stack.top).toBe(1)
    expect(stack.items).toEqual({
      0: "Item 0",
      1: "Item 1"
    })
  })

  it("push() throws an error with the message 'Only strings allowed' when the argument is not a string", () => {
    expect(() => stack.push([])).toThrow("Only strings allowed")
    expect(() => stack.push(1)).toThrow("Only strings allowed")
    expect(() => stack.push({})).toThrow("Only strings allowed")
    expect(() => stack.push(true)).toThrow("Only strings allowed")
  })

  it("pop() throws an error while trying to remove an element that doesn't exist", () => {
    expect(() => stack.pop()).toThrow("No elements to remove")
  })

  it("peek() returns the last element on the stack", () => {
    stack.push("Item 0")
    expect(stack.peek()).toBe("Item 0")
    stack.push("Item 1")
    expect(stack.peek()).toBe("Item 1")
    stack.pop()
    expect(stack.peek()).toBe("Item 0")
    expect(stack.items).toEqual({
      0: "Item 0"
    })
    stack.pop()
    expect(stack.peek()).toBe("No elements left")
  })
})
