/**
 * @time  2019/8/20 16:19
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc    prototype
 *          - 每一个函数都有自己的prototype
 *          - 每一个对象都有自己的一个__proto__指向它的上级原型对象
 *
 *          ----------------------------------------------------
 *          再者理解：JS里面，万物皆对象，但是函数是创世之神
 *          Because   : Object.constructor === Function;
 *          也可以这样理解，所有构造器的constructor都指向Function
 */

function Foo() {

}

const f = new Foo();

console.log(f.__proto__ === Foo.prototype);

console.log(Foo.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__ === null);

console.log(Function.prototype.__proto__ === Object.prototype)