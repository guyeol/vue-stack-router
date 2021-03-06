export default class TreeNode<T> {
  public children: Map<string, TreeNode<T>> = new Map();
  public data: T;
  constructor(data: T) {
    this.data = data;
  }
  public addChild(key: string, data: TreeNode<T>): void {
    this.children.set(key, data);
  }
  public removeChild(key: string): void {
    this.children.delete(key);
  }
  public getChild(key: string): TreeNode<T> | undefined {
    return this.children.get(key);
  }
}
