import Stack from './stack';
import equals from 'ramda/es/equals';
class TreeNode {
  data;
  parent = null;
  children = [];
  constructor(data) {
    this.data = data;
  }
}

class Tree {
  _root = null;
  options;

  getParent(formatData) {
    let parent;
    this.traverse((node) => {
      const match = equals(node.data, formatData);
      if (match) {
        parent = node;
        return true;
      }
      return false;
    });
    return parent;
  }
  add(data, toData) {
    const node = new TreeNode(data);
    if (!this._root) {
      this._root = node;
      return this;
    }
    if (toData) {
      const parent = this.getParent(toData);
      if (parent) {
        node.parent = parent;
        parent.children.push(node);
      } else {
        throw new Error('没有找到父元素');
      }
    }
  }
  // 深度优先遍历
  traverse(callback) {
    const stack = new Stack();
    let found = false;
    stack.inStack(this._root);
    let curNode = stack.outStack();
    while (!found && curNode) {
      found = callback(curNode);
      if (!found) {
        stack.inStack(...curNode.children);
        curNode = stack.outStack();
      }
    }
  }

  constructor(list, options) {
    this.options = options;
    this.add(options.rootValue);
    list.forEach((item) => {
      this.covertToTree(item);
    });
  }

  covertToTree(data) {
    const { rootValue, pickData } = this.options;
    const run = (data, parentData) => {
      const nodeData = pickData(data);
      const children = data.children || data.routes;
      this.add(nodeData, parentData);
      if (children && children.length > 0) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          run(child, nodeData);
        }
      }
    };
    run(data, rootValue);
  }

  getNode(cb) {
    let res;
    this.traverse((node) => {
      let match = cb(node);
      if (match) {
        res = node;
      }
      return match;
    });
    return res;
  }

  findPath(cb) {
    const node = this.getNode(cb);
    if (!node) return [];
    const res = [node];
    let curNode = node?.parent;
    while (curNode !== null) {
      res.push(curNode);
      curNode = curNode?.parent;
    }
    return res
      .map((node) => node?.data)
      .filter((item) => !equals(item, this.options.rootValue))
      .reverse();
  }
}

export default Tree;
