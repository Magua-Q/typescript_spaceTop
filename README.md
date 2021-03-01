### 基本类型
 + 类型声明
    + 可以使用字面量来进行类型声明
        ```
            let a : 10
            a = 10
            a = 11 // 会有异常
        ```

    + any
        显式any或者隐式any
    + unknown
    + void 没有返回值
    + never 
    + object
    + array
    + tuple
        ```
            // 元组 固定长度的数组
            let t: [string, string]
            t = ['a', 'b']
        ```
    + enum
 + 类型推断
 + 类型别名
    ```
        type myType = 1 | 2 | 3
        let m: myType
    ```
