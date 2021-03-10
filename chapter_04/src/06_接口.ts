(function() {
    /*
    * 接口可以在定义类的时候去限制类的结构
    *  接口中的所有的属性都不能有实际的值
    *  接口只定义对象的结构，而不考虑实际的值
    **/
   interface myInter {
       name: string;
       sayHello(): void
   }
   /**
    * 
    * 在定义类时，可以使类去实现一个接口
    *   实现接口就是使类满足接口的要求
   */
  class MyClass implements myInter {
      name: string
      constructor (name: string) {
          this.name = name
      }
      sayHello(): void {
        //   throw new Error("Method not implemented.");
        console.log('haha')
      }
  }
})()