import Stack from "./Stack";

const stack = new Stack();

stack.stackUp('ok')
stack.stackUp('ok')
stack.stackUp('any value')

console.log(stack.items)

console.log(stack.peek())