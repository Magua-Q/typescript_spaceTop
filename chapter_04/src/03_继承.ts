(function(){
    // 定义 动物 类
    class Animal {
        name: string
        age: number
        constructor (name: string, age: number) {
            this.name = name
            this.age = age
        }
        bark() {
            console.log('正在叫……');
        }
    }
    // 定义“狗” 的类 -- 继承动物类
    class Dog extends Animal {
        // 如果在子类中添加了和父类相同的方法名，则子类中的方法会覆盖父类中的方法, 又叫方法的重写
        run() {
            console.log('running');
        }
        bark() {
            console.log('bark');
            
        }
    }
    // 定义“猫” 的类
    class Cat extends Animal {

    }

    const cat = new Cat('饭团儿', 2)
    const dog = new Dog('布丁儿', 2)
    console.log(cat)
    cat.bark()
    console.log(dog)
    dog.run()
    dog.bark()
    
})()