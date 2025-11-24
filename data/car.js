class Car {

    #model 
    #brand 
    speed = 0
    isTrunkOpen = false

    constructor(brand, model) {
        
        this.#brand = brand
        this.#model = model
    }

    displayInfo() {
        return `${this.#brand} ${this.#model}, speed: ${this.speed} km/h, trunk open: ${this.isTrunkOpen}`
    }

    go() {
        if (this.isTrunkOpen) {
            return 
        } else if (this.speed + 5 <= 200) {
            this.speed += 5
        }

    }

    break() {
        if (this.speed - 5 >= 0) {
            this.speed -= 5
        }
    }

    openTrunk() {
        if (!this.isTrunkOpen && this.speed === 0) {
            this.isTrunkOpen = true
        }
    }

    closeTrunk() {
        if(this.isTrunkOpen) {
            this.isTrunkOpen = false
        }
    }




}


class RaceCar extends Car {
    accerlation

    isTrunkOpen = ''

    constructor(brand, model, accerlation) {
        super(brand, model)
        this.accerlation = accerlation
    }


    go(){
        this.speed += this.accerlation
    }

    openTrunk() {
        return
    }

    closeTrunk() {
        return
    }
}



const car1 = new Car('totota', 'Corolla')
const car2 = new Car('Tesla', 'model 3')
console.log(car1)
console.log(car2)

car1.go()
car1.go()
car1.go()
car1.break()
console.log(car1.displayInfo())


car2.openTrunk()
console.log(car2.displayInfo())


const raceCar1 = new RaceCar('McLarren', 'F1', 20)

console.log(raceCar1)