// 定义食物类
class Foods {
    element: HTMLElement;
    constructor () {
        this.element = document.getElementById('food')!
    }
    // 获取食物横坐标
    get X() {
        return this.element.offsetLeft
    }
    // 获取食物纵坐标
    get Y() {
        return this.element.offsetTop
    }
    // 随机生成食物
    change() {
        // 随机生成【0， 290】并且是10的倍数
        const left = Math.round(Math.random() * 29) * 10
        const top = Math.round(Math.random() * 29) * 10

        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }
}

export default Foods