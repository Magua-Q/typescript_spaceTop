(function() {
    class Person {
        // ts中可以在属性的前面添加修饰符
        /**
         * public 修饰的苏醒可以在任意位置访问、修改
         * private 私有属性， 只能在内部进行访问、修改
         *     1. 通过在类中添加方法使得私有属性可以被外部访问
         * */ 
        private _name: string
        age: number
        constructor (name: string, age: number) {
            this._name = name
            this.age = age
        }
        // 获取name属性
        // getName () {
        //     return this.name
        // }
        // 设置name属性
        // setName(val: string) {
        //     this.name = val
        // }

        // ts中设置getter方法的方式
        get name() {
            return this._name
        }
        set name(val: string) {
            this._name = val
        }
    }
    const per = new Person("悟空", 18)
    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     * 
    */
//    per.name = "猪八戒" 此时name不能修改
    per.name = 'haha'
   per.age = -18
   console.log(per)
})()
