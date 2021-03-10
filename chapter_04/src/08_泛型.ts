/**
 * 在定义函数或是类时, 如果遇到类型不明确就可以使用泛型
 * 
*/

function fn<T>(a: T): T {
    return a
}

// 可以直接使用具有泛型的函数
fn(10) // 不指定泛型，ts可以自动对类型进行推断
fn<string>('hello') // 指定泛型  

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
    return a
}

fn2<number, string>(123, 'haha')

interface Inter {
    length: number
}

function fn3<T extends Inter>(a: T): number {
    return a.length
}