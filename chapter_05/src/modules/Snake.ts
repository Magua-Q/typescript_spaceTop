class Snake {
    // 表示蛇头
    head: HTMLElement;
    // 蛇的身体
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')
    }
    // 获取蛇头的坐标x
    get X() {
        return this.head.offsetLeft
    }
    // 获取蛇头的坐标y
    get Y() {
        return this.head.offsetTop
    }
    // 设置蛇头的横坐标
    set X(val: number) {
        if (this.X === val) {
            return
        }
        if (this.X > 290 || this.X < 0) {
            throw new Error("蛇撞墙了, 游戏结束")
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
            if (val > this.X) {
                val = this.X - 10
            } else {
                val = this.X + 10
            }
        }
        this.head.style.left = val + 'px'
        this.moveBody()
        this.checkBody()
    }
    // 设置蛇头的纵坐标
    set Y(val: number) {
        if (this.Y === val) {
            return
        }
        if (this.Y > 290 || this.Y < 0) {
            throw new Error("蛇撞墙了, 游戏结束")
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
            if (val > this.Y) {
                val = this.Y - 10
            } else {
                val = this.Y + 10
            }
        }
        this.head.style.top = val + 'px'
        this.moveBody()
        this.checkBody()
    }
    // 增加蛇的身体
    addSnake () {
        // 向element中添加一个div
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }
    // 蛇的身体移动
    moveBody () {
        /**
         * 将后边身体设置为前边身体的位置
         *  即 第四节的位置设置为第三节的位置
        */
       for (let i = this.bodies.length - 1; i > 0 ; i--) {
           let bodyX = (this.bodies[i - 1] as HTMLElement).offsetLeft;
           let bodyY = (this.bodies[i - 1] as HTMLElement).offsetTop;
            
           (this.bodies[i] as HTMLElement).style.left = bodyX + 'px';
           (this.bodies[i] as HTMLElement).style.top = bodyY + 'px';
       }
    }
    // 坚持蛇是否和自己的身体相撞
    checkBody () {
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('碰到自己了，游戏结束')
            }        
        }
    }
}
export default Snake