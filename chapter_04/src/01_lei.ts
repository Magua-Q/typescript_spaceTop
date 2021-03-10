class Person {
    // 定义实例属性
    name: string = 'haha'
    age: number = 18
    // 定义静态属性（类属性）：如果要设置静态属性，只需要用static修饰即可
    // 静态属性的获取： 只能通过类名.属性名来获取
    static gender: string = 'male'

    // 定义类方法
    // 1. 定义实例方法
    say () {
        console.log('welcome to you' + this.age);
    }
    // 2. 定义类方法 或者静态方法
    static introduce() {
        console.log(`my name is ${this.name}`)
    }
}

let person = new Person()
console.log(person)
console.log(person.name)
console.log(Person.gender)
person.say()
Person.introduce()