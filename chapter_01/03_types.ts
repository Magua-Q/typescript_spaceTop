let _a : 10
_a = 10

// unknown
let s : unknown
let str: string
// s = str
// 如何处理
if (typeof s === 'string') {
    str = s
}

// 类型断言
str = s as string
str = <string>s

function sum(): void {
    console.log("xxx")
}

function del(): never {
    throw new Error("err")
    
}

let obj: {
    name: string,
    age?: number // 属性可选
}
obj = {
    name: ''
}
let objStr: {
    name: string,
    [key: string]: any // 任意属性名可以有有可以没有
}

objStr = {
    name: ''
}
let arr: string[] // 字符串数据
// let arr: Array<number>

// 元组 固定长度的数组
let t: [string, string]
t = ['a', 'b']

enum Gender {
    Male = 0,
    Female = 1
}

let i: {
    name: string,
    sex: Gender
}

i = {
    name: 'xz',
    sex: Gender.Male
}