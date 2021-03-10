(function() {
    /*
    * 以abstract开头的类是抽象类
    *   抽象类和其他类区别不大，只是不能用来创建对象 不能 new Animal()
    *   抽象类就是专门用来被继承的类
    */
    abstract class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        // sayHello () {
        //     console.log('正在叫……');
        // }
        // 定义一个抽象方法
        // 抽象方法使用abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello():void
    }

    class Dog extends Animal {
        // age: number
        // constructor (name: string, age: number) {
        //     // 如果在子类中写了构造函数，在子类构造函数函数中必须使用super来初始化
        //     super(name) // 调用父类的构造函数 
        //     this.age = age
        // }
        sayHello () {
            // super.sayHello()
            console.log('haha')
        }
    }

    const dog = new Dog('网民')
    dog.sayHello()

})()