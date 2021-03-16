export default class Stack {
  public items: any[] = [];

  public stackUp(value: any) {
    this.items.push(value);
  }

  public unstack() {
    this.items.pop()
  }


  public peek() {
    return this.isEmpty() ? 'stack is empty' : this.items[this.items.length - 1];  
  }

  public isEmpty() {
    return this.items.length === 0;
  }
}