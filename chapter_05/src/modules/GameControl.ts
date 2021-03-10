import Foods from './Foods'
import Snake from './Snake'
import ScorePanel from './ScorePanel'
// 游戏控制的类
class GameControl {
    food: Foods;
    snake: Snake;
    scorePanel: ScorePanel
    direaction: string = ''
    isLive: boolean = true
    constructor() {
         this.food = new Foods()
         this.snake = new Snake()
         this.scorePanel = new ScorePanel()

         this.init()
    }

    // 游戏初始化事件
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    // 蛇移动
    run () {
        // 获取蛇当前的坐标
        let x = this.snake.X
        let y = this.snake.Y
        switch(this.direaction) {
            case 'ArrowUp':
                y -= 10
                break
            case 'ArrowDown':
                y += 10
                break
            case 'ArrowLeft':
                x -= 10
                break
            case 'ArrowRight':
                x += 10
                break
        }

        if (this.isEat(x, y)) {
            console.log('吃到食物了')
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addSnake()
        }
        try {
            // 修改蛇的坐标
            this.snake.X = x
            this.snake.Y = y
        } catch (error) {
            alert(error.message)
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }
    // 判断蛇是否吃到食物
    isEat (X: number, Y: number) {
        return X === this.food.X && Y === this.food.Y
    }
    // 创建一个键盘按下的响应事件
    keydownHandler(event: KeyboardEvent) {
        console.log(event);
        this.direaction = event.key
    }
}
export default GameControl