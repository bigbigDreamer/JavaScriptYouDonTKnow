/**
 * @time  2019/8/30 14:55
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc   继承
 */
// 构造函数继承

function Animal(type) {
    this.type = type;
}

function Bird(type) {
    Animal.call(this,type);
}

const b = new Bird("鸟");

//缺点就是，它的子类不能继承父类的某些方法

//原型继承

//组合继承

//组合继承优化1

//组合继承优化2

