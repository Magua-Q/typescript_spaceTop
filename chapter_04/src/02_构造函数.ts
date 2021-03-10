class Dog {
    title: string
    age: number
    constructor(title: string, age: number ){
        // 在实例方法中，this指向当前的实例
        // 在构造函数中当前对象就是当前创建的对象
        // 可以通过this向新建的对象中添加属性
        this.title = title
        this.age = age
    }
}
const dog = new Dog('heihei', 18)
console.log(dog)