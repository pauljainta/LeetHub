/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    arr:number[];
    constructor() {
        this.arr=[];
    }

    push(val: number): void {
        this.arr.push(val);

    }

    pop(): void {
        this.arr.pop();
    }

    top(): number {
        return this.arr[this.arr.length-1];
    }

    getMin(): number {
        return Math.min(...this.arr);

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

