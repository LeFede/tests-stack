export class Stack {

  #top = -1
  #items = {}

  get top() {
    return this.#top
  }

  get items() {
    return this.#items
  }

  peek() {
    return this.#items[this.#top]
  }

  peek() {
    return this.#items[this.#top]
  }

  push(item) {
    if (typeof item !== "string") throw new Error("Only strings allowed")
    this.#top += 1
    this.#items[this.#top] = item
  }

  pop() {
    if (this.#top === -1) throw new Error("No elements to remove")
    const { [this.#top]: last, ...rest } = this.#items
    this.#items = rest
    this.#top -= 1
    return last
  }

}
