// 实现一个add方法，使计算结果能够满足如下预期：
//add(1)(2)(3) = 6;
//add(1, 2, 3)(4) = 10;
//add(1)(2)(3)(4)(5) = 15;
/**
 * @time  2019/8/22 14:27
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  函数柯里化
 */

const Currie = (...arr) => {
    return () => {

    }
};

const foo = Currie.bind(this);

console.log(foo(1));