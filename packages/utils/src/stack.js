// 后进先出
class Stack {
  stackList = [];
  // 入队
  inStack(...data) {
    this.stackList.unshift(...data);
  }
  // 出列
  outStack() {
    return this.stackList.shift();
  }
}

export default Stack;
