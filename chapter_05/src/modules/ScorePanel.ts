// 定义记分板的类
class ScorePanel {
    score = 0;
    level = 1;
    ScoreEle: HTMLElement;
    LevelEle: HTMLElement;
    maxLevel: number
    constructor(maxLevel: number = 10) {
        this.ScoreEle = document.getElementById('score')!
        this.LevelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
    }
    // 增加分数
    addScore () {
        this.score++;
        this.ScoreEle.innerHTML = this.score + ""
        if (this.score % 10 === 0) {
            this.levelUp()
        }
    }
    // 升级
    levelUp () {
        if (this.level < this.maxLevel) {
            this.LevelEle.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanel