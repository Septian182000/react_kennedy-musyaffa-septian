class Vehicle {
    constructor(){
        this.merk;
        this.wheels;
        this.speed;
    }
    
    turnOn(){
        return console.log(`Mobil merk ${this.merk} dengan roda ${this.wheels} dihidupkan`);
    }
    
    turnOff(){
        return console.log(`Mobil merk ${this.merk} dengan roda ${this.wheels} dimatikan`);
    }
}

class Car extends Vehicle {
    constructor(){
        super();
    }

    turnON(){
        return super.turnOn();
    }

    turnOff(){
        return super.turnOff();
    }
    
    increaseSpeed(newSpeed){
        return this.speed += newSpeed;
    }

    droveOff(){
        this.increaseSpeed(10);
        return console.log(`Mobil dijalankan dengan kecepatan ${this.speed}km`);
    }

    decreaseSpeed(newSpeed){
        return this.speed -= newSpeed;
    }

    stopDrive(){
        this.decreaseSpeed(10);
        return console.log(`Mobil mengurangi kecepatan ${this.speed}km`);
    }

    setMerk(merk){
        this.merk = merk;
    }

    setWheels(wheels){
        this.wheels = wheels;
    }

    setSpeed(kecepatanPerjam){
        this.speed = kecepatanPerjam;
    }
    
}
const newCar = new Car();
newCar.setMerk('BMW');
newCar.setWheels(4);
newCar.setSpeed(0);

const increaseSpeed = newCar;
increaseSpeed.turnON();
increaseSpeed.droveOff();
increaseSpeed.droveOff();
increaseSpeed.droveOff();

console.log(" ");

const decreaseSpeed = newCar;
decreaseSpeed.stopDrive();
decreaseSpeed.stopDrive();
decreaseSpeed.stopDrive();
decreaseSpeed.turnOff();