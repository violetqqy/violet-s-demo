/**
 * 变量的作用域：全局变量和局部变量
 *
 * 函数内部可以直接读取全局变量
 */
var n = 999;
function f1() {
    console.log(n);
}
f1(); //999

/**
 * 函数外部自然无法读取函数内的局部变量
 */
function f2() {
    var n = 999;
}
console.log(n); //error

/**
 * 函数内部声明变量的时候，一定要使用var命令。如果不用的话，你实际上声明了一个全局变量！
 */
function f1() {　　　　
    n = 999;　　
}　　
f1();　　
console.log(n); // 999

/**
 * 从外部读取局部变量
 *
 * 在函数内部，在定义一个函数
 *
 * 在以下的代码中，函数f2就被包括在函数f1内部
 * 这时f1内部的所有局部变量，对f2都是可见的
 * 但是反过来就不行，f2内部的局部变量，对f1就是不可见的
 * 这就是Javascript语言特有的“链式作用域”结构（chain scope）
 * 子对象会一级一级地向上寻找所有父对象的变量
 * 所以，父对象的所有变量，对子对象都是可见的，反之则不成立
 * 既然f2可以读取f1中的局部变量，那么只要把f2作为返回值，就可以在f1外部读取它的内部变量了
 */
function f1() {　　　　
    n = 999;　　　　
    return function f2() {
        console.log(n);
    }
    // return f2;　　
}
var result = f1();
result(); //999

/**
 * 闭包的概念
 *
 * 以上代码中的f2函数，就是闭包
 * 由于在Javascript语言中，只有函数内部的子函数才能读取局部变量
 * 因此可以把闭包简单理解成“定义在一个函数内部的函数”
 * 所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁
 * 
 * 闭包的用途
 * 可以读取函数内部的变量
 * 让这些变量的值始终保持在内存中
 *
 * 以下代码中，result实际上就是闭包f2函数
 * 它一共运行了两次，第一次的值是999，第二次的值是1000
 * 这证明了，函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除
 * 原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，
 * 而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，
 * 被垃圾回收机制（garbage collection）回收。
 * “nAdd=function(){n+=1}”这一行，首先在nAdd前面没有使用var关键字
 * 因此 nAdd是一个全局变量，而不是局部变量
 * 其次，nAdd的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包
 * 所以nAdd相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作
 */
function f1() {　　　　
    var n = 999;　　　　
    nAdd = function() {
        n += 1
    }　　　　
    function f2() {　　　　　　
        console.log(n);　　　　
    }　　　　
    return f2;　　
}　　
var result = f1();　　
result(); // 999
　　
nAdd();　　
result(); // 1000

/**
 * 使用闭包的注意点
 *
 * 1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大
 * 所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露
 * 解决方法是，在退出函数之前，将不使用的局部变量全部删除
 * 
 * 2）闭包会在父函数外部，改变父函数内部变量的值
 * 所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method）
 * 把内部变量当作它的私有属性（private value），这时一定要小心
 * 不要随便改变父函数内部变量的值
 */

/**
 * 理解闭包的运行机制
 */
name = "The Window";　　
var object = {　　　　
    name: "My Object",
    getNameFunc: function() {　　
    	// name = "The Window";　　　　　　
        return function() {　　　　　　　　
            return this.name;　　　　　
        };　　　　
    }
};
console.log(object.getNameFunc()()); //The Window XX //undefined

function outerFun() {
    //没有var 
    a = 0;
    console.log(a);
}
var a = 4;
console.log(a);
outerFun();
console.log(a); //4 0 0

/**
 * 函数b嵌套在函数a内部
 * 函数a返回函数b
 */
function a() {
    var i = 0;

    function b() {
        console.log(++i);
    }
    return b;
}
var c = a();
c();

function fun(n, o) {
    console.log(o)
    return {
        fun: function(m) {
            return fun(m, n);
        }
    };
}
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3); //undefined,?,?,?
var b = fun(0).fun(1).fun(2).fun(3); //undefined,?,?,?
var c = fun(0).fun(1);
c.fun(2);
c.fun(3); //undefined,?,?,?
/**
 * 这是一道非常典型的JS闭包问题
 * 其中嵌套了三层fun函数
 * 搞清楚每层fun的函数是那个fun函数尤为重要
 * http://www.cnblogs.com/xxcanghai/p/4991870.html
 */