/**
 * @time  2019/8/23 10:13
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc   继承
 * @note   任何您想要被继承的方法都应该定义在构造函数的prototype对象里
 *       ，并且永远使用父类的prototype来创造子类的prototype，这样才不会打乱类继承结构。
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = () => {
        console.log(this.name)
    }
}

function Male(has,name, age) {
    Person.call(this,name,age);
    this.has = has;
}

Male.prototype = Object.create(Person.prototype);
Male.prototype.constructor = Male;

const m = new Male("child","张三",45);
m.say();

console.log(m.__proto__ === Male.prototype);

console.log(Male.prototype.__proto__.__proto__.__proto__);


