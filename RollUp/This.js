/**
 * @time  2019/8/20 15:08
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc   简述一下This的绑定机制
 *         1. 默认绑定
 *         2. 隐士绑定
 *         3. 显示绑定
 *         4. New 绑定
 */


// 默认绑定：其实默认绑定就是由词法作用域默认绑定this，在node 环境中的this为“Global”，在浏览器环境下：“window”

console.log(this);

//隐式绑定

function fun() {
    console.log(this);
}

const obj = {
    fun
};

obj.fun();

//显示绑定 - 硬绑定

function bar() {
    console.log(this)
}

bar.call(obj,null);
bar.apply(obj,null);

//new 绑定

function foo() {
    console.log(this);
}

const f = new foo();

/*  打印结果：
 * {}
 * { fun: [Function: fun] }
 * { fun: [Function: fun] }
 * { fun: [Function: fun] }
 * foo {}
 */

