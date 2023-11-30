class Player{
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.left = 340
        this.top = 660
        this.height = 160
        this.width = 80
        this.element = document.createElement('img')
        this.element.src = '../images/car.png'
        this.element.style.position = 'absolute'

        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        
        this.gameScreen.appendChild(this.element)
    }
}